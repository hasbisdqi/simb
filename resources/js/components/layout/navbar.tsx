export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="fixed bg-primary w-full block rounded-bl-2xl rounded-br-2xl z-1000">
      <div className="mx-auto py-4 px-2 sm:px-4 lg:px-6 flex flex-row justify-between items-center">
        {children}
      </div>
    </nav>
  )
}

function NavbarIdentity({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-4 w-fit items-center">
      {children}
    </div>
  )
}

function NavbarPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row gap-4 w-fit'>
      {children}
    </div>
  )
}

Navbar.Identity = NavbarIdentity;
Navbar.Panel = NavbarPanel; 
