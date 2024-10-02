"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.FormMessage = exports.FormDescription = exports.FormControl = exports.FormLabel = exports.FormItem = exports.Form = exports.useFormField = void 0;
const React = __importStar(require("react"));
const react_slot_1 = require("@radix-ui/react-slot");
const react_hook_form_1 = require("react-hook-form");
const utils_1 = require("@/lib/utils");
const label_1 = require("@/components/ui/label");
const Form = react_hook_form_1.FormProvider;
exports.Form = Form;
const FormFieldContext = React.createContext({});
const FormField = ({ ...props }) => {
    return (<FormFieldContext.Provider value={{ name: props.name }}>
      <react_hook_form_1.Controller {...props}/>
    </FormFieldContext.Provider>);
};
exports.FormField = FormField;
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = (0, react_hook_form_1.useFormContext)();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
exports.useFormField = useFormField;
const FormItemContext = React.createContext({});
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
    const id = React.useId();
    return (<FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={(0, utils_1.cn)("space-y-2", className)} {...props}/>
    </FormItemContext.Provider>);
});
exports.FormItem = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (<label_1.Label ref={ref} className={(0, utils_1.cn)(error && "text-destructive", className)} htmlFor={formItemId} {...props}/>);
});
exports.FormLabel = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (<react_slot_1.Slot ref={ref} id={formItemId} aria-describedby={!error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`} aria-invalid={!!error} {...props}/>);
});
exports.FormControl = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return (<p ref={ref} id={formDescriptionId} className={(0, utils_1.cn)("text-[0.8rem] text-muted-foreground", className)} {...props}/>);
});
exports.FormDescription = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return (<p ref={ref} id={formMessageId} className={(0, utils_1.cn)("text-[0.8rem] font-medium text-destructive", className)} {...props}>
      {body}
    </p>);
});
exports.FormMessage = FormMessage;
FormMessage.displayName = "FormMessage";
