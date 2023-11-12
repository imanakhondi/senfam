import { useEffect, useState } from "react";
import { Dashboard } from "../../http/entities/Dashboard";
import {
  clearMessageAction,
  setMessageAction,
} from "../../state/message/messageAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading";

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const messageState = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();
  const dashboard = new Dashboard();
  const [showImg, setShowImg] = useState(false);

  const clickHandler = () => {
    data.initialCharge = data.initialCharge - data.ratePerClick;
   
    setData({ ...data, initialCharge: data.initialCharge });
    console.log(data);
  };

  const getData = async () => {
    setLoading(true);
    const result = await dashboard.getDashboard();
    if (result === null) {
      dispatch(setMessageAction(dashboard.errorMessage, dashboard.errorCode));
      setLoading(false);

      return;
    }
    setTimeout(() => setLoading(false), 200);
    setData(result);
  };
  useEffect(() => {
    dispatch(clearMessageAction());
    // getData();
    setData({
      AdPlace: "استان",
      AdSubCat: "مشهد",
      destinationLink: "http://127.0.0.1:5173/panel/advertising/add",
      AdTitle: "اسمت",
      startDate: "1402/06/06",
      endDate: "1402/06/31",
      initialCharge: "70000",
      financialCredit: "230",
      ratePerShow: "200",
      ratePerClick: "100",
      AdImage: "",
      urlImage: "http://127.0.0.1:5173/panel/advertising/add111",
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    // const data = {
    //   AdPlace: "استان",
    //   AdSubCat: "مشهد",
    //   destinationLink: "http://127.0.0.1:5173/panel/advertising/add",
    //   AdTitle: "اسمت",
    //   startDate: "1402/06/06",
    //   endDate: "1402/06/31",
    //   initialCharge: "70000",
    //   financialCredit: "230",
    //   ratePerShow: "10",
    //   ratePerClick: "100",
    //   AdImage: "",
    //   urlImage: "http://127.0.0.1:5173/panel/advertising/add111",
    // };
    console.log("pirsag", data);
    if (data) {
      const date = new Date()
        .toLocaleString("fa-IR-u-nu-latn")
        .split(",")[0]
        .split("/");
      const start = data.startDate.toLocaleString("en-US");
      const end = data.endDate.toLocaleString("en-US").split("/");
      const newDate = new Date(date[2], parseInt(date[1]) - 1, date[0]);
      const newStart = new Date(start[2], parseInt(start[1]) - 1, start[0]);
      const newEnd = new Date(end[2], parseInt(end[1]) - 1, end[0]);
    }

    // const year = String(date[0]);
    // const month = String(date[1]).padStart(2, "0");
    // const day = String(date[2]).padStart(2, "0");
    // const formatDate = `${year}/${month}/${day}`;
    // console.log(
    //   date,
    //   formatDate
    // );
    // console.log(data.initialCharge >= 60000);
    // console.log(data.startDate, new Date(data.startDate));
    // console.log("date",data.endDate,new Date(date));
    // console.log("letzt",new Date(data.startDate).getTime() >= new Date(date).getTime());
    console.log("imanaaaa", data);
    if (data) {
      if (
        data.initialCharge >= 60000 ||
        (newDate >= newStart && newDate <= newEnd)
      ) {
        setShowImg(true);
     
      }
    }
  }, [data]);

useEffect(()=>{
  if (showImg) {
    data.initialCharge = data.initialCharge - data.ratePerShow;
    console.log("iman", data.initialCharge);
    setData({ ...data, initialCharge: data.initialCharge });
  }
},[showImg])

  return (
    <div className="flex flex-col">
      {loading && <Loading />}
      {messageState.message && (
        <span className="py-2 text-center rounded-lg bg-red-200 text-red-500 border border-red-500">
          {messageState.message}
        </span>
      )}
      {!loading && data && (
        <>
          <h1>تعداد کاربران :</h1>
          <h2>{data?.usersCount}</h2>
          <h1>تعداد تبلیغات :</h1>
          <h2>{data?.trucksCount}</h2>

          {showImg && (
            <img
              src="/public/images/women-left.png"
              alt=""
              onClick={clickHandler}
            />
          )}
        </>
      )}
      {/* <img referrerpolicy='origin' id = 'rgvjwlaowlaosizpesgtjzpe' style = 'cursor:pointer' onclick = 'window.open("https://logo.samandehi.ir/Verify.aspx?id=344907&p=xlaoaodsaodspfvlobpdjyoe", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' alt = 'logo-samandehi' src = 'https://logo.samandehi.ir/logo.aspx?id=344907&p=qftishwlshwlbsiylymayndt' /> */}
    </div>
  );
};

export default DashboardPage;
