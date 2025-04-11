class SystemUI {
    private static instance: SystemUI;

    private constructor() { }

    public static getInstance(): SystemUI {
        if (!SystemUI.instance) {
            SystemUI.instance = new SystemUI();
        }
        return SystemUI.instance;
    }

    public static applyDarkMode(isDarkMode: boolean): void {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    public static getLocalStorageValue(key:string): any {
        return localStorage.getItem(key);
    }

    public static toggleDarkMode(): void {
        const isDarkMode = localStorage.getItem("theme") === "dark";
        const newMode = isDarkMode ? "light" : "dark";
        localStorage.setItem("theme", newMode);
        this.applyDarkMode(newMode === "dark");
    }

}

export default SystemUI;
