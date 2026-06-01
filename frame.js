let rightFtMsg = `Pissing Off Your Teachers Since 2024`;
let leftFtMsg = `Made With All The Love We Are Legally Allowed To Give!`;
const frameToday = new Date();
const month = frameToday.getMonth() + 1;
const day = frameToday.getDate();
const isSecondSundayOfMay =
    month === 5 &&
    frameToday.getDay() === 0 &&
    day >= 8 &&
    day <= 14;
const isThirdSundayOfJune =
    month === 6 &&
    frameToday.getDay() === 0 &&
    day >= 15 &&
    day <= 21;
if (isSecondSundayOfMay) {
    leftFtMsg = `Made With Motherly Love`;
} else if (isThirdSundayOfJune) {
    leftFtMsg = `Made With Fatherly Love`;
} else if (month === 1 && day === 1) {
    rightFtMsg = `New Year, Same Chaos Since 2024`;
    leftFtMsg = `Starting The Year Questionably!`;
} else if (month === 2 && day === 14) {
    rightFtMsg = `Spreading Love (And Mild Annoyance) Since 2024`;
    leftFtMsg = `Made With Slightly Extra Love Today`;
} else if (month === 4 && day === 1) {
    rightFtMsg = `April Fools!`;
    leftFtMsg = `This Website Will Shut Down For Good In A Month`;
} else if (month === 7 && day === 4) {
    rightFtMsg = `Independently Annoying Since 2024`;
    leftFtMsg = `Red, White, And Playing Games At School`;
} else if (month === 10 && day === 31) {
    rightFtMsg = `Scaring Teachers Since 2024`;
    leftFtMsg = `Powered By Sugar And Bad Decisions`;
} else if (month === 11 && day >= 22 && day <= 28 && frameToday.getDay() === 4) {
    rightFtMsg = `Thankful For Chaos Since 2024`;
    leftFtMsg = `Stuffed With Code And Regret`;
} else if (month === 12 && day === 25) {
    rightFtMsg = `Sleighing Teachers Since 2024`;
    leftFtMsg = `Made With Festive Mischief`;
}
const headerHTML = `
    <header id="site-header" class="themed">
        <div id="header-left">
            <div id="weatherContainer">
                <div id="global-text">
                    <span id="weather">
                    </span>
                    <button class="darkbuttons"id="toggle">
                        °C
                    </button>
                </div>
            </div>
        </div>
        <div id="header-center">
            <a href="index.html">
                <img src="./res/logo.svg" id="logo">
            </a>
        </div>
    </header>
    <div id="mobileSidePanel" class="themed">
        <a id="lgbtn" href="index.html">
            <img src="./res/logo.svg" id="logo" style="width:fit-content; margin-bottom:-60px; display:block;">
        </a>
        <button id="closeMobilePanel" class="darkbuttons">
            <i class="ic ic-x-lg">
            </i>
        </button>
    </div>
    <footer id="site-footer" class="themed">
        <span>
            ${leftFtMsg}
        </span>
        <span>
            ${rightFtMsg}
        </span>
    </footer>
`;
document.addEventListener("DOMContentLoaded", () => {
    const headerWrapper = document.createElement("div");
    headerWrapper.innerHTML = headerHTML;
    document.body.insertBefore(headerWrapper, document.body.firstChild);
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobilePanel = document.getElementById("mobileSidePanel");
    const closeMobile = document.getElementById("closeMobilePanel");
    const overlay = document.createElement("div");
    overlay.id = "mobileOverlay";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => {
        mobilePanel.style.right = "-100%";
        overlay.style.display = "none";
    });
    mobileBtn.addEventListener("click", () => {
        mobilePanel.style.right = "0";
        overlay.style.display = "block";
    });
    closeMobile.addEventListener("click", () => {
        mobilePanel.style.right = "-100%";
        overlay.style.display = 'none';
    });
    function updateHeaderFooterHeights() {
        const header = document.getElementById("site-header");
        const footer = document.getElementById("site-footer");
        if (!header || !footer) return;
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        document.documentElement.style.setProperty(
            "--headerHeight",
            headerHeight + "px"
        );
        document.documentElement.style.setProperty(
            "--footerHeight",
            footerHeight + "px"
        );
    }
    updateHeaderFooterHeights();
    window.addEventListener("resize", updateHeaderFooterHeights);
    appendToMain();
});
if (true) {
    const LOADER_CONFIG = {
        mode: "auto",
    };
    const loader = document.createElement("div");
    loader.id = "planet-loader";
    loader.innerHTML = `
        <div class="planet-wrapper">
            <div class="ring ring1"></div>
            <div class="ring ring2"></div>
            <div class="ring ring3"></div>
            <div class="letter">C</div>
        </div>
        <div id="loader-maint-content" style="display:none; flex-direction:column; align-items:center; margin-top:20px;">
            <div id="loader-maint-message" style="margin-bottom:15px; font-size:18px; text-align:center;"></div>
            <a href="https://status.infinitecampus.xyz" id="loader-maint-btn" class="discord">Check Statuses</a>
        </div>
    `;
    document.body.prepend(loader);
    const maintContent = loader.querySelector("#loader-maint-content");
    const maintMessage = loader.querySelector("#loader-maint-message");
    const maintBtn = loader.querySelector("#loader-maint-btn");
    let isLoaded = false;
    function showLoader() {
        loader.style.display = "flex";
        loader.style.flexDirection = "column";
        loader.style.opacity = "1";
        loader.style.color = "white";
        loader.style.top = "60px";
    }
    function hideLoader() {
        loader.style.opacity = "0";
        loader.style.top = "60px";
        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
    function showggfLoader() {
        if (!document.getElementById("planet-loader")) {
            document.body.prepend(loader);
        }
        loader.style.display = "flex";
        loader.style.top = "134.8px";
        loader.style.opacity = "1";
    }
    function hideggfLoader() {
        loader.style.opacity = "0";
        loader.style.top = '60px';
        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
    let bypassLoader = false;
    function applyLoaderMode(mode, message = "") {
        LOADER_CONFIG.mode = mode || "auto";
        if (bypassLoader && (mode === "maint" || mode === "infinite" || mode === "time")) {
            hideLoader();
            return;
        }
        if (mode === "maint") {
            showLoader();
            maintContent.style.display = "flex";
            maintMessage.textContent = message || "Maintenance Mode Enabled";
        }
        else if (mode === "infinite") {
            maintContent.style.display = "none";
            showLoader();
        }
        else if (mode === "time") {
            maintContent.style.display = "none";
            showLoader();
            setTimeout(hideLoader, 3000);
        }
        else if (mode === "auto") {
            if (isLoaded) {
                hideLoader();
            } else {
                maintContent.style.display = "none";
                showLoader();
            }
        }
    }
    applyLoaderMode("auto");
    window.addEventListener("load", () => {
        isLoaded = true;
        if (LOADER_CONFIG.mode === "auto") {
            hideLoader();
        }
    });
    window.showLoader = showLoader;
    window.hideLoader = hideLoader;
    window.showggfLoader = showggfLoader;
    window.hideggfLoader = hideggfLoader;
}