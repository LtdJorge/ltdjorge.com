import {type Locale, localeList} from "~/lib/locales.ts";

const all_pages = localeList.map((locale) => {
    return {
        locale: locale.locale,
        pages: (() => {
            if (locale.locale === 'es') {
                return [
                    {page: 'index', label: 'Inicio'},
                    {page: 'blog', label: 'Blog'},
                    {page: 'resume', label: 'Currículum'}
                ]
            } else {
                return [
                    {page: 'index', label: 'Index'},
                    {page: 'blog', label: 'Blog'},
                    {page: 'resume', label: 'Resume'}
                ]
            }
        })()
    }
});

function pagesForLocale(currentLocale: Locale) {
    const filtered = all_pages.filter((page) => { return page.locale === currentLocale })[0];
    return typeof filtered === 'undefined' ?  all_pages : [];
}

export { all_pages, pagesForLocale }