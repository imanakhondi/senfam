import Input from "./Input/Input";
import TextAreaInput from "./Input/TextAreaInput";
import SelectInput from "./Input/SelectInput";
import RadioInput from "./Input/RadioInput";
import DateInput from "./Input/DateInput";
import CheckBoxInput from "./Input/CheckBoxInput";
import BooleanCheckBox from "./Input/BooleanCheckBox";
import SearchableDropdown from "./Input/SearchableDropdown";

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case "input":
            return <Input {...rest} />;
        case "textarea":
            return <TextAreaInput {...rest} />;
        case "select":
            return <SelectInput {...rest} />;
        case "radio":
            return <RadioInput {...rest} />;
        case "checkbox":
            return <CheckBoxInput {...rest} />;
        case "date":
            return <DateInput {...rest} />;
        case "boolCheckInput":
            return <BooleanCheckBox {...rest} />;
        case "searchableDropdown":
            return <SearchableDropdown {...rest} />;
        default:
            return null;
    }
};

export default FormikControl;
