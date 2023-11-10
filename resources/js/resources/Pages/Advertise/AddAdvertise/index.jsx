import { useEffect, useState } from "react";
import { useFormik } from "formik";
import FormikForm from "../../../common/FormikForm";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";
import { addAdvertisePage } from "../../../constants/strings/fa";
// import { Driver } from "../../../http/entities/Driver";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessageAction,
} from "../../../state/message/messageAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DateObject } from "react-multi-date-picker";
import { Advertise } from "../../../http/entities/Advertise";

const initialValues = {
  state: "",
  town: "",
  job: "",
  destinationLink: "",
  AdTitle: "",
  startDate: "",
  endDate: "",
  initialCharge: "",
  financialCredit: "",
  ratePerShow: "",
  ratePerClick: "",
  AdImage: "",
  urlImage: "",
  allStates: [],
  allTowns: [],
  allJobs: [],
};

const validationSchema = Yup.object({
  destinationLink: Yup.string(),
});

const AddAdvertise = () => {
  // const driver = new Driver();
  const messageState = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate()
  const advertise= new Advertise()

  useEffect(() => {
    dispatch(clearMessageAction());
  }, []);

  const onSubmit = async (values) => {
    setLoading(true)
    const {
      state,
      town,
      job,
      destinationLink,
      AdTitle,
      startDate,
      endDate,
      initialCharge,
      financialCredit,
      ratePerShow,
      ratePerClick,
      AdImage,
      urlImage
    } = values;
    if (values.startDate instanceof DateObject)
      values.startDate = values.startDate.toString();
    if (values.endDate instanceof DateObject)
      values.endDate = values.endDate.toString();

    const result = await advertise.storeAdvertise(
      state,
      town,
      job,
      destinationLink,
      AdTitle,
      startDate,
      endDate,
      initialCharge,
      financialCredit,
      ratePerShow,
      ratePerClick,
      AdImage,
      urlImage
    );

    if (result === null) return toast.error(advertise.errorMessage);

    toast.success(result._message);
    navigate("/panel/places");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    const fetchStatesData = async () => {
      // const response = await fetch("/api/states");
      // const result = await response.json();
      formik.setFieldValue("allStates", [
        { id: 1, title: "خراسان رضوی" },
        { id: 2, title: "تهران" },
        { id: 3, title: "مازندران" },
      ]);
    };
    fetchStatesData();
  }, []);

  useEffect(() => {
    const fetchCitiesData = () => {
      // if (selectedState !== "") {
      // const response = await fetch(`/api/cities/${selectedState}`);
      // const result = await response.json();
      // setCities(result);
      if (formik.values.state) {
        formik.setFieldValue("allTowns", []);
        formik.setFieldValue("allJobs", []);
        if (formik.values.state === "") {
          formik.setFieldValue("allTowns", []);
          formik.setFieldValue("allJobs", []);
        }
        if (formik.values.state === "1") {
          formik.setFieldValue("allTowns", [
            { id: 1, title: "تایباد " },
            { id: 2, title: "مشهد" },
            { id: 3, title: "تربت" },
          ]);
        }
      }
    };
    fetchCitiesData();
  }, [formik.values.state]);

  useEffect(() => {
    const fetchCitiesData = () => {
      if (formik.values.town) {
        // if (formik.values.town === "") {
        //   formik.setFieldValue("allTowns", []);
        // }
        if (formik.values.town === "1") {
          formik.setFieldValue("allJobs", [
            { id: 1, title: "پوشاک " },
            { id: 2, title: "نجاری" },
            { id: 3, title: "خرازی" },
          ]);
        }
      }
    };
    fetchCitiesData();
  }, [formik.values.town]);

  useEffect(() => {
    if (formik.values.town === "") {
      const iman = formik.values.state;
      formik.setFieldValue("destinationLink", `senfam.ir/index/${iman}` || "");
      return;
    }
    if (formik.values.job === "") {
      const naghi = formik.values.town;
      formik.setFieldValue(
        "destinationLink",
        `senfam.ir/index_town/${naghi}` || ""
      );
      return;
    }
    const naghi = formik.values.town;
    const kasra = formik.values.job;
    formik.setFieldValue(
      "destinationLink",
      `senfam.ir/index_isic/${naghi}/${kasra}` || ""
    );
  }, [formik.values.state, formik.values.town, formik.values.job]);

  return (
    <FormikForm
      onSubmit={formik.handleSubmit}
      loading={loading}
      error={messageState}
      title={`${addAdvertisePage._title}`}
      subTitle={`${addAdvertisePage._subTitle}`}
    >
      <SelectCustomInput
        name="state"
        formik={formik}
        customStyleInput="rounded-xl "
        pageString={addAdvertisePage}
        selectOptions={formik.values.allStates}
        onChange={(event) => {
          formik.setFieldValue("state", event.target.value);
          formik.setFieldValue("town", "");
          formik.setFieldValue("job", "");
          formik.setFieldValue("allTowns", []);
        }}
      />
      <SelectCustomInput
        name="town"
        formik={formik}
        customStyleInput="rounded-xl "
        pageString={addAdvertisePage}
        selectOptions={formik.values.allTowns}
        onChange={(event) => {
          formik.setFieldValue("town", event.target.value);
          formik.setFieldValue("job", "");
          formik.setFieldValue("allJobs", []);
        }}
      />
      <SelectCustomInput
        name="job"
        formik={formik}
        customStyleInput="rounded-xl "
        pageString={addAdvertisePage}
        selectOptions={formik.values.allJobs}
        onChange={formik.handleChange}
      />
      <FormikControl
        control="input"
        name="destinationLink"
        formik={formik}
        pageString={addAdvertisePage}
        readOnly
      />
      <FormikControl
        control="input"
        name="AdTitle"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="date"
        name="startDate"
        formik={formik}
        pageString={addAdvertisePage}
        onChange={(event) => {
          formik.setFieldValue("startDate", event.toString());
        }}
      />
      <FormikControl
        control="date"
        name="endDate"
        formik={formik}
        pageString={addAdvertisePage}
        onChange={(event) => {
          formik.setFieldValue("endDate", event.toString());
        }}
      />
      <FormikControl
        control="input"
        name="initialCharge"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="input"
        name="financialCredit"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="input"
        name="ratePerShow"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="input"
        name="ratePerClick"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="input"
        name="AdImage"
        formik={formik}
        pageString={addAdvertisePage}
      />
      <FormikControl
        control="input"
        name="urlImage"
        formik={formik}
        pageString={addAdvertisePage}
        type="file"
        onChange={(event) => {
          formik.setFieldValue("docfile", event.currentTarget.files[0]);
        }}
      />
    </FormikForm>
  );
};

export default AddAdvertise;

const SelectCustomInput = ({
  formik,
  selectOptions,
  name,
  label,
  readOnly,
  customStyleInput = "",
  custom = "",
  onChange,
}) => {
  return (
    <div
      className={`${custom} flex flex-col mt-2 w-full lg:w-[300px] xl:w-[400px]`}
    >
      <label className=" text-primaryColor text-sm">{label}</label>
      <select
        name={name}
        {...formik.getFieldProps(name)}
        onChange={onChange}
        readOnly={readOnly}
        className={`${customStyleInput} w-full block text-sm shadow-sm bg-mainBgColor border border-borderColor rounded-full mb-1 px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 `}
      >
        <option value="">انتخاب کنید</option>

        {selectOptions.map((item) => (
          <option value={item.id} id={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};
