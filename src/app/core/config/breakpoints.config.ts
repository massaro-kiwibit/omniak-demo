export const CustomBreakpoints = {
    XSmall: '600px',
    Small: '960px',
    Medium: '1280px',
    Large: '1920px',
    XLarge: '5000px',
};

/* Meaning of all the Media Queries: 
- xs: Between 0 and XSmall 
- gt-xs: Above XSmall 
- lt-sm: Below XSmall 
- sm: Between XSmall and Small 
- gt-sm: Above Small 
- lt-md: Below Small 
- md: Between Small and Medium 
- gt-md: Above Medium 
- lt-lg: Below Medium 
- lg: Between Medium and Large 
- gt-lg: Above Large 
- lt-xl: Below Large 
- xl: Between Large and XLarge
*/
export const MediaQueries = new Map<string, string>([
    ["xs", `(min-width: 0) and (max-width: ${CustomBreakpoints.Small})`],
    ["gt-xs", `(min-width: ${CustomBreakpoints.XSmall})`],
    ["lt-sm", `(max-width: ${CustomBreakpoints.XSmall})`],
    ["sm", `(min-width: ${CustomBreakpoints.XSmall}) and (max-width: ${CustomBreakpoints.Small})`],
    ["gt-sm", `(min-width: ${CustomBreakpoints.Small})`],
    ["lt-md", `(max-width: ${CustomBreakpoints.Small})`],
    ["md", `(min-width: ${CustomBreakpoints.Small}) and (max-width: ${CustomBreakpoints.Medium})`],
    ["gt-md", `(min-width: ${CustomBreakpoints.Medium})`],
    ["lt-lg", `(max-width: ${CustomBreakpoints.Medium})`],
    ["lg", `(min-width: ${CustomBreakpoints.Medium}) and (max-width: ${CustomBreakpoints.Large})`],
    ["gt-lg", `(min-width: ${CustomBreakpoints.Large})`],
    ["lt-xl", `(max-width: ${CustomBreakpoints.Large})`],
    ["xl", `(min-width: ${CustomBreakpoints.Large}) and (max-width: ${CustomBreakpoints.XLarge})`],
]);