export const getInstalledApps = () =>{
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
};

export const saveInstalledApps = (apps) =>{
    localStorage.setItem("installedApps", JSON.stringify(apps));
}