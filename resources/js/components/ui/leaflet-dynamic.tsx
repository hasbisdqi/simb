export const dynamicLeaflet = (name: string) =>
    async () => {
        const mod = await import("react-leaflet");
        return { default: mod[name] };
    };
