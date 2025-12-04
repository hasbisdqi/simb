import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import Segment from "@/components/segment"
import { Button, buttonVariants } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Map, MapCircle, MapLayerGroup, MapLayers, MapLayersControl, MapMarker, MapPolyline, MapTileLayer, MapZoomControl } from "@/components/ui/map"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import useAssemblyPointCoordinates from "@/hooks/use_assembly_point_coordinates"
import useEarthquakeData from "@/hooks/use_earthquake_data"
import useEvacuationRoadCoordinates from "@/hooks/use_evacuation_road_coordinates"
import { Link } from "@inertiajs/react"
import ClassNames from "embla-carousel-class-names"
import { LatLngExpression } from "leaflet"
import { MapPin, Radio, WaypointsIcon } from "lucide-react"

function App({ posts }: { posts: any[] }) {
  const indonesia_coordinate = [-2.5489, 118.0149] as LatLngExpression;
  const zoom_level = 5;
  const evacuationRoadData = useEvacuationRoadCoordinates();
  const assemblyPointData = useAssemblyPointCoordinates();
  const { nonTsunamiPotential, tsunamiPotential } = useEarthquakeData();
  return (
    <div className="scroll-smooth">
      <Navbar>
        <Navbar.Identity>
          <img src="/logo.png" alt="logo" width={55} height={55} />
          <span className="text-lg font-bold text-white">SIM Tsunami</span>
        </Navbar.Identity>

        <Navbar.Panel>
          <a className={buttonVariants({ variant: 'outline' })} href="#beranda">
            <span className='text-sm'>Beranda</span>
          </a>
          <a className={buttonVariants({ variant: 'outline' })} href="#peta">
            <span className='text-sm'>Data</span>
          </a>
          <a className={buttonVariants({ variant: 'outline' })} href="#data">
            <span className='text-sm'>Data</span>
          </a>
          <a className={buttonVariants({ variant: 'outline' })} href="#edukasi">
            <span className='text-sm'>Edukasi</span>
          </a>
        </Navbar.Panel>
      </Navbar>
      <div className="absolute h-2.5 w-2.5" id="beranda"></div>
      <Segment bg_image='bg.png'>
        <div className="w-full h-full aspect-video flex flex-col gap-28 justify-center">
          <div>
            <h1 className="text-[3rem] font-bold text-center">Sistem Informasi Tsunami Indonesia</h1>
            <p className='text-xl font-medium text-center'>Deteksi dini dan pantau status tsunami di seluruh wilayah Indonesia</p>
          </div>

          <div className="flex flex-row justify-center gap-2">
            <Link href="#beranda" className={buttonVariants({size: 'lg'})}>
              Evakuasi
            </Link>
            <Link href="#beranda" className={buttonVariants({size: 'lg', variant: 'outline'})}>
              Peringatan
            </Link>
          </div>
        </div>
      </Segment>

      <div className="absolute h-2.5 w-2.5" id="peta"></div>
      <Segment>
        <Segment.Title>Peta Daerah Potensi Tsunami</Segment.Title>
        <Segment.Subtitle>Menunjukkan wilayah Indonesia yang berpotensi terdampak tsunami</Segment.Subtitle>


        <div className="aspect-1920/850">
          <Map center={indonesia_coordinate} zoom={zoom_level} className="min-h-100">
            <MapLayers defaultLayerGroups={['Jalur Evakuasi', 'Titik Kumpul', 'Non Potensial Tsunami', 'Potensial Tsunami']}>
              <MapLayersControl />
              <MapZoomControl />
              <MapTileLayer
              />
              <MapTileLayer
                name="Color"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapLayerGroup
                name="Jalur Evakuasi"
              >
                {evacuationRoadData && evacuationRoadData.features.map((feature: any, index: number) => {

                  if (feature.geometry.type !== "LineString") return null;

                  const coords = feature.geometry.coordinates.map(
                    (c: number[]) => [c[1], c[0]] // CONVERT GeoJSON -> Leaflet
                  );

                  return (
                    <MapPolyline
                      key={index}
                      className="fill-none stroke-blue-500"
                      positions={coords}
                    />
                  );
                })}
              </MapLayerGroup>

              <MapLayerGroup
                name="Titik Kumpul"
              >
                {assemblyPointData && assemblyPointData.features.map((feature: any, index: number) => {

                  if (feature.geometry.type !== "Point") return null;

                  const coords = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]] satisfies LatLngExpression;

                  return (
                    <MapMarker
                      key={index}
                      position={coords}
                      icon={<MapPin className="text-blue-700" />}
                    />
                  );
                })}
              </MapLayerGroup>

              <MapLayerGroup
                name="Non Potensial Tsunami"
              >

                {nonTsunamiPotential && nonTsunamiPotential.map((earthquake: any, index: number) => {
                  const coords = earthquake.coordinate satisfies LatLngExpression;

                  return (
                    <MapMarker
                      key={'non-tsunami-' + index}
                      position={coords}
                      icon={<Radio className="text-green-700" />}
                    />
                  );
                })}
              </MapLayerGroup>

              <MapLayerGroup
                name="Potensial Tsunami"
              >
                {tsunamiPotential && tsunamiPotential.map((earthquake: any, index: number) => {
                  const coords = earthquake.coordinate satisfies LatLngExpression;

                  return (
                    <MapMarker
                      key={'tsunami-' + index}
                      position={coords}
                      icon={<Radio className="text-red-700" />}
                    />
                  );
                })}
              </MapLayerGroup>
            </MapLayers>
          </Map>
        </div>
        {/* Legends */}
        <div className="flex justify-around py-5">
          <div className="flex gap-2"><Radio className="text-red-700" /> Gempa Berpotensi Tsunami</div>
          <div className="flex gap-2"><Radio className="text-yellow-700" /> Gempa Tidak Berpotensi Tsunami</div>
          <div className="flex gap-2"><MapPin className="text-blue-700" /> Titik Kumpul</div>
          <div className="flex gap-2"><WaypointsIcon className="text-blue-500" /> Jalur Evakuasi</div>
        </div>
      </Segment>

      <div className="absolute h-2.5 w-2.5" id="data"></div>
      <Segment>
        <Segment.Title>Sejarah gempa</Segment.Title>
        <Segment.Subtitle>Pantau sejarah gempa</Segment.Subtitle>

        <Table className="rounded-lg overflow-hidden">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="py-2 px-4 text-left">Magnitude</TableHead>
              <TableHead className="py-2 px-4 text-left">Tanggal</TableHead>
              <TableHead className="py-2 px-4 text-left">Waktu</TableHead>
              <TableHead className="py-2 px-4 text-left">Wilayah</TableHead>
              <TableHead className="py-2 px-4 text-left">Kedalaman (km)</TableHead>
              <TableHead className="py-2 px-4 text-left">Potensi Tsunami</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tsunamiPotential && tsunamiPotential.map((quake, index) => (
              <TableRow key={index} className="border-b border-gray-300">
                <TableCell className="py-2 px-4 bg-red-200">{quake.magnitude}</TableCell>
                <TableCell className="py-2 px-4">{quake.date}</TableCell>
                <TableCell className="py-2 px-4">{quake.time}</TableCell>
                <TableCell className="py-2 px-4">{quake.region}</TableCell>
                <TableCell className="py-2 px-4">{quake.depth}</TableCell>
                <TableCell className="py-2 px-4">{quake.tsunami_potential ? "Ya" : "Tidak"}</TableCell>
              </TableRow>
            ))}

            {nonTsunamiPotential && nonTsunamiPotential.map((quake, index) => (
              <TableRow key={index} className="bg-white border-b border-gray-300">
                <TableCell className="py-2 px-4 bg-yellow-200">{quake.magnitude}</TableCell>
                <TableCell className="py-2 px-4">{quake.date}</TableCell>
                <TableCell className="py-2 px-4">{quake.time}</TableCell>
                <TableCell className="py-2 px-4">{quake.region}</TableCell>
                <TableCell className="py-2 px-4">{quake.depth}</TableCell>
                <TableCell className="py-2 px-4">{quake.tsunami_potential ? "Ya" : "Tidak"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Segment>

      <div className="absolute h-2.5 w-2.5" id="edukasi"></div>
      <Segment>
        <Segment.Title>Edukasi</Segment.Title>
        <Segment.Subtitle>Pelajari lebih lanjut</Segment.Subtitle>

        <Carousel opts={{
          loop: true
        }}
          plugins={[ClassNames()]}
        >
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem key={post.id} className="basis-1/3 bg-background">
                <div className="p-4 border rounded-lg">
                  <img src={post.cover_image ? '/storage/' + post.cover_image : undefined} alt={post.title} className="object-cover aspect-video mb-4 rounded" />
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="mb-4 line-clamp-1 text-sm">{post.excerpt}</p>
                  <Link className={buttonVariants()} href={'posts/' + post.slug}>Read More</Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Segment>
      <Footer />
    </div>
  )
}

export default App