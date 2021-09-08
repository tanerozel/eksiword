import { useAppContex } from "../contex/AppContex";
import DownloadButton from "./DownloadButton";
import CloudWord from "./CloudWord";

export const Visualisation = () => {
    const { status } = useAppContex();
    const isMobile = window.innerWidth <= 800;
    let styles = {display: status ? "block" : "none"};
    
    if (isMobile) {
        styles["zoom"] = (33 + (window.innerWidth - 320) / 20) + '%'; 
    }

    return (
        <div>
            <div className="mt-5 mb-5 word-body">
                <div className="button row">
                    {status ? <DownloadButton /> : ""}
                </div>
                { CloudWord(styles) }

            </div>

        </div>
    );
}
