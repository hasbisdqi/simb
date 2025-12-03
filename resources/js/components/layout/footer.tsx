import IconCloud from '../icons/cloud';
import IconTelephone from '../icons/phone';
import IconFacebook from '../icons/facebook';
import IconWhatsapp from '../icons/whatsapp';
import IconEnvelope from '../icons/envelope';

export default function Footer() {
  return (
    <footer className="w-full h-fit bg-primary p-25 rounded-tl-2xl rounded-tr-2xl mt-40">
      <div className="flex flex-col h-fit">
        <div className="flex flex-row justify-around h-fit">
          <div className='flex flex-row items-start gap-7'>
            <IconCloud />
            <h1 className='text-white font-bold text-2xl align-middle'>tsunami</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className='text-white font-bold gap-5 text-left'>contact us</h5>
            <div className="flex flex-row gap-3.5">
              <IconEnvelope />
              <p className='text-white font-light'>info@tsunmai.com</p>
            </div>
            <div className="flex flex-row gap-3.5">
              <IconTelephone />
              <p className="text-white font-light">+1 800 555 0199</p>
            </div>
            <div className="flex flex-row gap-3.5">
              <IconFacebook />
              <IconWhatsapp />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-left">about</h5>
            <div className="flex flex-col gap-3.5">
              <p className='text-white font-light text-left'>info tsunami</p>
              <p className='text-white font-light text-left'>edukasi</p>
              <p className='text-white font-light text-left'>peta daerah potensi</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-left">legal</h5>

            <div className="flex flex-col gap-3.5">
              <p className='text-white font-light text-left'>privacy policy and terms</p>
              <p className='text-white font-light text-left'>and condition</p>
              <p className='text-white font-light text-left'>cookie policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold text-left">help</h5>
            <div className="flex flex-col gap-3.5">
              <p className='text-white font-light text-left'>shipping and delivery</p>
              <p className='text-white font-light text-left'>return policy</p>
              <p className='text-white font-light text-left'>security and payment</p>
            </div>
          </div>
        </div>
        <hr className="grow border-t-2 border-white py-auto mt-20 mb-5" />
        <p className="text-white font-light font">Copyright © 2025 Kelompok 2 - All rights reserved.</p>
      </div >
    </footer>
  );
}
