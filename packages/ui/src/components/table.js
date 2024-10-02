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
exports.TableCaption = exports.TableCell = exports.TableRow = exports.TableHead = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = void 0;
const React = __importStar(require("react"));
const utils_1 = require("../utils");
const Table = React.forwardRef(({ className, ...props }, ref) => (<table ref={ref} className={(0, utils_1.cn)("w-full caption-bottom text-sm relative", className)} {...props}/>));
exports.Table = Table;
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (<thead ref={ref} className={(0, utils_1.cn)("[&_tr]:border-b border", className)} {...props}/>));
exports.TableHeader = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => (<tbody ref={ref} className={(0, utils_1.cn)("[&_tr:last-child]:border-0 border", className)} {...props}/>));
exports.TableBody = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (<tfoot ref={ref} className={(0, utils_1.cn)("bg-primary font-medium text-primary-foreground", className)} {...props}/>));
exports.TableFooter = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => (<tr ref={ref} className={(0, utils_1.cn)("border-b", className)} {...props}/>));
exports.TableRow = TableRow;
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => (<th ref={ref} className={(0, utils_1.cn)("h-12 px-4 text-left align-middle font-semibold [&:has([role=checkbox])]:pr-0 border-r last:border-none w-auto", className)} {...props}/>));
exports.TableHead = TableHead;
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => (<td ref={ref} className={(0, utils_1.cn)("px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0 border-r last:border-none", className)} {...props}/>));
exports.TableCell = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (<caption ref={ref} className={(0, utils_1.cn)("mt-4 text-sm text-muted-foreground", className)} {...props}/>));
exports.TableCaption = TableCaption;
TableCaption.displayName = "TableCaption";
