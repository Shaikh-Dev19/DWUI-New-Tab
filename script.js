// Array of font styles
const fontStyles = [
    {
        url: "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap",
        name: "Saira Stencil One",
        fontFamily: "Saira Stencil One, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Aldrich&display=swap",
        name: "Aldrich",
        fontFamily: "Aldrich, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Audiowide&display=swap",
        name: "Audiowide",
        fontFamily: "Audiowide, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap",
        name: "Black Ops One",
        fontFamily: "Black Ops One, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap",
        name: "Bungee Inline",
        fontFamily: "Bungee Inline, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap",
        name: "Chakra Petch",
        fontFamily: "Chakra Petch, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Electrolize&display=swap",
        name: "Electrolize",
        fontFamily: "Electrolize, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Exo+2&display=swap",
        name: "Exo 2",
        fontFamily: "Exo 2, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        name: "Fira Code",
        fontFamily: "Fira Code, monospace"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap",
        name: "Fugaz One",
        fontFamily: "Fugaz One, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Michroma&display=swap",
        name: "Michroma",
        fontFamily: "Michroma, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Nova+Square&display=swap",
        name: "Nova Square",
        fontFamily: "Nova Square, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Orbit&display=swap",
        name: "Orbit",
        fontFamily: "Orbit, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Orbitron&display=swap",
        name: "Orbitron",
        fontFamily: "Orbitron, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Oxanium&display=swap",
        name: "Oxanium",
        fontFamily: "Oxanium, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
        name: "Press Start 2P",
        fontFamily: "Press Start 2P, cursive"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Quantico&display=swap",
        name: "Quantico",
        fontFamily: "Quantico, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Quicksand&display=swap",
        name: "Quicksand",
        fontFamily: "Quicksand, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap",
        name: "Raleway Dots",
        fontFamily: "Raleway Dots, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Russo+One&display=swap",
        name: "Russo One",
        fontFamily: "Russo One, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Sora&display=swap",
        name: "Sora",
        fontFamily: "Sora, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Syne&display=swap",
        name: "Syne",
        fontFamily: "Syne, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Teko&display=swap",
        name: "Teko",
        fontFamily: "Teko, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Tourney&display=swap",
        name: "Tourney",
        fontFamily: "Tourney, sans-serif"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=VT323&display=swap",
        name: "VT323",
        fontFamily: "VT323, monospace"
    },
    {
        url: "https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap",
        name: "Zen Dots",
        fontFamily: "Zen Dots, sans-serif"
    }
];

function randomClockFont() {
    const randomIndex = Math.floor(Math.random() * fontStyles.length);
    const selectedFont = fontStyles[randomIndex];

    // Remove previous font link if it exists
    let oldFontLink = document.getElementById("dynamicFontLink");
    if (oldFontLink) {
        oldFontLink.remove();
    }

    // Add new font link dynamically
    const fontLink = document.createElement("link");
    fontLink.id = "dynamicFontLink";
    fontLink.rel = "stylesheet";
    fontLink.href = selectedFont.url;
    document.head.appendChild(fontLink);

    // Apply font styles to clock and date elements
    const elements = [document.getElementById("clock"), document.getElementById("date")];
    elements.forEach(el => {
        if (el) {
            el.style.fontFamily = selectedFont.fontFamily;
            el.style.fontWeight = fontWeight;
        }
    });
}


// Background images
const backgrounds = [
    'https://lh3.googleusercontent.com/pw/AP1GczNiX-dSdiU0nZG3IuEpiGz4nW_4WTUkpwLV9ZUOa1t5xKveWejL80qfEpS3Il2DKdZ0yN_rw874hrfjL5biKYEg0wm_MynGYRWQWD9WY_Bne7oR3pSMRiiLguDa5ebv1XaTbFCgsNW6UJpuKOrGk7U=w1042-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNX1QdITHelc4k_HSAKoAk95nY5GC_eb_e_SFkVtsBurOE29W6jAKN4UdR6jcb-RCcVq4dzBISPqIJrkswG5mFo9Na8NoMiklZYxHFZy9V4X9o1vW5AMe5ufNXQgzvKOZ4O4kv6Lqks12yzo75w6q4=w1144-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNaACgwbFq6TvHNl7YAjD5hi8yHvzhNS2Nh3zghkzvemkyWzdD3HmzSe4q7SqdqjdGKkGA-NyhiHyvFYBLN-ngXtYYHZpniqL9N1K0NWIfEc3Rp4drGEq_Dt4J-ohuU1cmCpfkJjrWMMuZOXHRk6js=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNOhUufG7Ge0jiHUNVLSm9YV7ygYQvDfsy7a6hRL3Qdxz9v9t3UvOR0kmDvsey8hHtOZrifdY5XqAMJZrGfOEix-s5WjBKqmMifUoQTyyNMMobSpsqKVoD_Uquc4pjy8B44mGLpbcbc1n7OCQASuEM=w1042-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNfIWwFDh0Rrd5rNd88v0j2x7jroZDHjjcme-2flL49YUzcRQWxLj8dVzpruaiwaKRLYaJNSyuP7wQh0q11bvU5iNgZFQQyGh9pRIdQQ2vTWRj7t3_t2GNJkOMd1-0cVmynVfM11PEpNFfZqvvS074=w1166-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczPv_D6wMh92ULxaGeXpbsMPWz4JfIVk61jzLcnT9QYAZmcTMOsSwlf9OHzuqsqxYWNJL14UUfcCbrIobumwlEAx0qmwmxyi_vuZKLXCOyrRAcNx7qs6gtgvac0OZ7YWjc-YFJm8nEO3VhqfgyCPrJA=w1171-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNjzoTSEyzT2k4L6DNwsI2sVv_pC-lg0r_LTZhOYN5qGMb9jOxxQ2zWs3Od7Fd8Pu5QFUxB-XECn9o8ymiWlZW2hAdaB1IFfTKSshOv3y2Z3YynovKg-V3MOSo290MELgBpoV8D6eyF4SCci_9M7uI=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNYW1XW0thA1GjYYdBnmCmSvfRUo9w0N9r8wxLv9eZ7lAMGLr2XQjeUfn2Ksscq9Qm4KFtanuWUxLXVtmuHGQME63jHg4kTJ26ybC0aLH9HDwuEXn8oXCTuAaB0-AXa58GFh83wMW8g0AG7a_RIvJw=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczPGvuajccMgAcSpiOr2HeaxNJTkS6MHOoJXHY99MCXttl4B1PKZZvS1KJdbLk9Nb8dZK24WXGtLS0Lr0Jcj0G329_IXtbkYFH8noGMuYxp2Cy66P1_H_o3xRdNifO5UUK_QnxxD3l_MW6cEsQxUHhE=w1042-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczOGFunMxK6RgSxhCjYiQym8EWASRzPIeiDnf-KGDJ8x6ERiqLhDW19aw-WBTMyymRQczQyVkri3j2TBOhfLzZG-U9ngRUhCCIuzU3_MCBlKRiNIz8QPBTh_KE09c47NSIv1WjKuMt71mt9KPc7GaSk=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMH5_0dBJKUqikvuLKxUbXHysIzbCRtGGlvbx0JiYuA-GPXL1cHeTmpw5nrSW2uSo8fLw3n4aR_IJRF6o2lyA4CCFzNVLXCdlWaslgh4Xol9Jin2jpuLJA5YGSu10z2kLo42kgcKYd2y6AeFaDtoMk=w1042-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczOzHu-ZMlco1b0py6Mcspjt4_gVJ3rIPauzdHpTddQPVcRQmM84hZnAO8FvQX4c10606IWfAUM09-mxX0WY8hMlT64KA9Z0hWyJTZy_gk3VTlFt5WIj46CFK9SwHrjU6O046LNapWM8SCcOniNaP58=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczONqPDNaaC8RWVMbYaTB0JYfuI_C7GTUpFnSXK60hwIgmfyfyNEP8tHMKnIFUJuqanY0c-HqqvE84cStdfPBbv1d1r6v3RJ5MoSjX5yg6KdFtCf6xW3_UyAf_KDNc2cjzkMoAogRBr5urtEagtGs2Y=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNvMDycPjo9ahIUVKD5YVFnPK7M2p78pRLO5ZqfamNzab-z77u8qmqtf_RMwDdnrCHEGOanm0zoZGoJme_wd0dR-rb7R0Bohf473LrnYEXirNOEJS9YaibO4aafgXBMYdHxclId70wqpTS5JJcDuvI=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMzkIonQfI5qEmYhzIPUQ_psLQuT3Kh-2qItUfaZuMKvrtSBx6loWE3_b70kUPSnhUW-Kvic8hy1lqCrli5SwobWEaFuQdOiBxoQW6R17MlELqUWvtRjPGBkyAXeFBN6_7P9SbUPkx4frzZaXKUJbs=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczOSalMfl9MGdYcUYHXW0IQielFc1VAj56Ieb1NlwmHxsGiDllBzCUybR633oOjuigFv0pWa6GiW0zDLhQbWjKnXxRHCuCfMfnKzvm1D6h5uTlFfXUDM3ciO0qcT4LicP701F_6krBeX9j9LRIKemu8=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczO9cb0sDC758D89p0qClBim1v59XAvoe4iv3BzkA3pLELnh7yzVW29wyPgD-DmDm9MFFGazVmFbQMi324aoblodZt0XPTtM5GYHvXCzgKnNzfXxMlM8tS0j49PF73wsGXq7DtII0mDstim1ZUKsR9A=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczM7jbemQPLrt4qlBYDbPR8XT8bN7gU90vMaz0wW7LACpL-ALTaMZFRF-euCyJ5-w2aPYWZVEzq5jabJ-WCjwpnsmaPdP3W9Rx0f-RAdj3SfimXLG-99N2ZHmz-8BWlh0Vr_eBq2xU2Tg3ZDTZEplrs=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMtmHzEPfFWou06tzi3i4BxYSmYdsCaZZ-dLKL8Yg-YN25r2gwcT2SjPrqbz0kPLTyUkkw2jS2ZXdhFc2G-kJUe0MkHZ3PdgKJcFb6rcmEiaZGw50A8hLcda0Hrm0cHPSUGZ-wn2V__T-SHNh9dbL0=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMzNSd8silNch2mnOw1JvUvf6Sk29vV_9ipF_gNb2hmFqfuJlGCqtIkHah2rIpiHmN84YV_CIHaz3Wp-EC25-z29pdJBTqdcF0ZAo3VXOOoNWOkO79i3Wmh_fpP4w36GtgOrOI9ArIfIZkhp4e0mBs=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNGMkZBfNWZzyGbIr7IBt4u12_vkGUK5GaaFACuIblntnRCmfDMwRBwT1a0n6tmG5_yovyFqgd25Q0bJi7KURCbC_k69Xlrh9sHrQ91ALsgS7XwAzowMlcaavFoSHGlXrUfyNOmoZy274gso3fkQ-A=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczOg1Zzmu0BGri1YkH2KEZi0GUN3zSmITy7tmJCebb4316eAem9QmoPljqIE7bvbJlGduXJ39_E2R9jyVi2Iz5zg9JyThybKjKFOe6P_bxH2Dzh7qHoFve0ANl59MpljZSGrNjwolwuTl0S2SHivT9U=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczPE7PU2pat6c9d_4Ry_HSdil-pQI8EcZyZTwpGL0TNrZrna69Ed0K00IJRig4SJMqwTfnefH8wL6S0G-USuUW6JMJ3Ld1fy6Mlsi0D8v3Y8-Jgj-omYBIYf8uzihhr4VO4QGaFn02wenf7xdR9mOrw=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMJ2E9v0tsc9YML5lTh-0DaI2vef_UOAx6nptVp05wc6j0Uui3obuEXq9MYfw1MZTQXiyoPcNVANMYn-U3aCNaJ4jvx91_AvuoP9fj8fB5U-Fgy9Wki2x8CepmbBl0Ypx7Gj9IL5zUmGRHUPWT2k3A=w976-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNmbtkdv8imicsy6xfaEG4P9hgkMjayZ2c7WTE9RDA3rPn0Seut2ebmhTfAoCixheJKf9CeVNH28roc7RFoQ6wI_suBoZuxbPf6kJvaKCjo6h4yQ1QFFo7yz6jUjnDRtrZGHOtDZ_B9q5jL3SdIPZw=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczPjANZRvDEqErZXErg-bfHnlIbB1onKGRzBDq_0rQP6fdYEVziXDB0VLtY3LLpou3vh1rwjwnHdvH9iDKz7JbMDz_Jo6N-BEvNR3iLsMcMc8NAhaQgG4gB8RyWvUJfI4Wvz-nRt3sisJofiib6hS0U=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczPuz2R3PLGrwOEnzSWV203-c7OdkzUYpYmaXI7aneWH8m46CjfdFinKvD8hn9iJPtBgH66OiCyh3EXzDBTqjiIJJEWOPfY8esblmKcwaCNTjFc71Po4uBkaAOJGDZMCYGx7hjeuLx0wGzOS1IBLmWM=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczM35WLhQpZIfIlX3QeclERAb7AEZWpCyfz30sopsGUAMSCjxjOSFIeSXOcxnuwE_IbnsyPaWFFISvpUuFhRJDZR_X0jYf9LBv5ddV76t7cqTLxSLFfZ0ZX7sospRO0y3y5MJzzBYs0KvtgbnE5LwiY=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMf7jPIcvi0F02liYTTwdmm6sy3DNXw5yc5QVJ3RdXEGZlGzq0DFKbnCraEIMWc0-KgtwqyesgCyC9XATg7838Htz0dmZcM7SfH31JRFQkYIimMGyWHxfXjLD9rJMYvGhZnD7GThyAl6HepiPkjyfs=w1157-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczN8dW3uqjufK8LAtPUPVj4ajSfpMlE9PKhjiiby5IlooZHVb1Bez0bQp81LW62mcWshuTY7JprEWqTlm4uyZol5JzZ0ZaVHAny9eG7GyOsALJ7cdzBSh5nbHDKLu3-JJ_-N-exofTRq5T1AHXNMGWc=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNIYi2vTRY5V2-9j5WhvNex_mCfNYvLWYZsGp5C2bLyWArvuZLgeztvSTQruQn0J5wg6813Ji3-EX6zSXDdLtC0sC37Z5FAbDKEYw_aNC-eanf4ZMS4nnvQwpY6yLMdSzOSccL77S0tE83l2iaVqg4=w977-h651-s-no-gm?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczM35WLhQpZIfIlX3QeclERAb7AEZWpCyfz30sopsGUAMSCjxjOSFIeSXOcxnuwE_IbnsyPaWFFISvpUuFhRJDZR_X0jYf9LBv5ddV76t7cqTLxSLFfZ0ZX7sospRO0y3y5MJzzBYs0KvtgbnE5LwiY=w977-h651-s-no-gm?authuser=0'
];

function setRandomBackground() {
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url(${randomBackground})`;
}
// Set new background every time the page is opened
setRandomBackground();

// Update Clock & Date
function updateDateTime() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('date').textContent = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Search functionality
document.getElementById('search-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_parent');
        }
    }
});

// Load Shortcuts
function loadShortcuts() {
    const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
    const container = document.getElementById('shortcuts');
    container.innerHTML = '';

    shortcuts.forEach((shortcut, index) => {
        const shortcutEl = document.createElement('div');
        shortcutEl.className = 'shortcut fade-in';
        shortcutEl.innerHTML = `
    <img class="shortcut-icon" src="https://www.google.com/s2/favicons?domain=${shortcut.url}&sz=64" alt="${shortcut.name}">
    <div class="shortcut-info">
        <div class="shortcut-title">${shortcut.name}</div>
    </div>
    <div class="shortcut-actions">
        <button class="btn-delete" data-index="${index}">×</button>
    </div>
`;

        shortcutEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-delete')) {
                window.open(shortcut.url, '_parent');
            }
        });

        container.appendChild(shortcutEl);
    });

    document.getElementById('confirmAddShortcutBtn').addEventListener('click', addShortcut);

    // Attach delete handlers dynamically
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function (e) {
            deleteShortcut(parseInt(this.dataset.index));
            e.stopPropagation();
        });
    });
}

// Show/Hide Modal
function toggleModal(show) {
    document.getElementById('addShortcutModal').style.display = show ? 'block' : 'none';
    document.getElementById('modalBackdrop').style.display = show ? 'block' : 'none';
    if (!show) {
        document.getElementById('shortcutName').value = '';
        document.getElementById('shortcutUrl').value = '';
    }
}

// Add Shortcut
function addShortcut() {
    const name = document.getElementById('shortcutName').value.trim();
    let url = document.getElementById('shortcutUrl').value.trim();

    if (!name || !url) return;

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
    shortcuts.push({ name, url });
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));

    toggleModal(false);
    loadShortcuts();
}

// Delete Shortcut
function deleteShortcut(index) {
    const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
    shortcuts.splice(index, 1);
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    loadShortcuts();
}

// Event Listeners
document.getElementById('addShortcutBtn')?.addEventListener('click', () => toggleModal(true));
document.getElementById('cancelBtn')?.addEventListener('click', () => toggleModal(false));
document.getElementById('modalBackdrop')?.addEventListener('click', () => toggleModal(false));
document.getElementById('addShortcutModal')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addShortcut();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleModal(false);
});

// Initialize
loadShortcuts();


// Initialize clock & fonts on page load
randomClockFont();
