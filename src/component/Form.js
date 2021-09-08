import { useAppContex } from "../contex/AppContex";
import { getUserEntry } from "../Service.tsx";
import Loading from "../component/Loading"
let page = 1;
let allSummary = "";
let allTitle = "";

function Form() {
    const { isLoading, setisLoading, nickName, setnickName, setstatus, status } = useAppContex();

    const onChangeInput = (e) => {
        setnickName(e.target.value);
    }



    const genertText = async (nickName) => {
        let items = await getUserEntry(nickName, page);

        for (let index = 0; index < items.length; index++) {
            let item = items[index];

            allSummary = allSummary + "" + item.summary;
            allTitle = allTitle + "" + item.name;
        }

        if (items.length === 10 && page < 100) {

            if (page % 5 || page === 1) {
                window.parseText(allSummary);
            }

            page++;
            await genertText(nickName);
        }

        window.parseText(allSummary);

        setisLoading(false);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);
        setstatus(true)

        page = 1;
        allSummary = "";
        allTitle = "";
        genertText(nickName);

    }

    return (
        <>
            <div className="mt-5 mb-5 search-form">
                <form id="search-form" onSubmit={handelSubmit}>
                    <div className="form-group position-relative">
                        <input name="nickName" onChange={onChangeInput} value={nickName} className="p-3 form-control pr-5 public-account-input" placeholder="Nickini yazda endamını görek " />
                        <div className="search-icon">
                        <svg class="bi bi-search"> 
                        <svg viewBox="0 0 512 512">
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                            </svg>
                        </svg>
                           
                        </div>
                    </div>
                </form >
            </div >

            {isLoading ? <Loading /> : null}
        </>)
}

export default Form
