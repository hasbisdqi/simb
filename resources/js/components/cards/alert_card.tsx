export default function AlertCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-4 bg-accent inline-block rounded-2xl">
      {children}
    </div>
  );
}

function AlertCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mb-2 text-left">
      {children}
    </h3>
  );
}

function AlertCardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-light text-left">
      {children}
    </div>
  )
}

AlertCard.Title = AlertCardTitle;
AlertCard.Content = AlertCardContent;
