(
    function()
    {
        const SIDEBAR_TOGGLER = document.getElementById("sidebar_toggler")
        const SIDEBAR = document.getElementById("side_navbar")
        const CONTENT = document.getElementById("main_content")
        
        SIDEBAR.toggleAttribute("hidden")

        function toggle_sidebar()
        {
            SIDEBAR.toggleAttribute("hidden")

            if (SIDEBAR.hasAttribute("hidden"))
            {
                CONTENT.removeAttribute("hidden")
            }

            resize_sidebar();
        }

        function resize_sidebar()
        {
            if (this.window.innerWidth < 500 && !SIDEBAR.hasAttribute("hidden"))
            {
                CONTENT.setAttribute("hidden", "")
            }
            else
            {
                CONTENT.removeAttribute("hidden")
            }
        }

        SIDEBAR_TOGGLER.addEventListener("click", toggle_sidebar)

        window.addEventListener("resize", resize_sidebar)
    }
)()