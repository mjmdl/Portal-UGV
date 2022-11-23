const PAGES = [
    {
        name: "page_mural",
        element: document.getElementById("page_mural")
    }
]

function change_page_to(page_name)
{
    let use_default_page = true

    PAGES.forEach(
        function(page)
        {
            if (page.name == page_name)
            {
                page.element.removeAttribute("hidden")
                use_default_page = false
            }
            else
            {
                page.element.setAttribute("hidden", "true")
            }
        }
    )

    if (use_default_page)
    {
        PAGES[0].element.removeAttribute("hidden")
    }
}