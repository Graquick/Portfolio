export default function UseDarkMode() {
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.add("dark");
    }, []);
}
