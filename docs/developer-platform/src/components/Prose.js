"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prose = Prose;
const clsx_1 = __importDefault(require("clsx"));
function Prose({ as, className, ...props }) {
  let Component = as ?? "div";
  return (
    <Component
      className={(0, clsx_1.default)(
        className,
        "prose dark:prose-invert",
        // `html :where(& > *)` is used to select all direct children without an increase in specificity like you'd get from just `& > *`
        "[html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl",
      )}
      {...props}
    />
  );
}
