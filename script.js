// // Background images from Unsplash
// const backgrounds = [
//     'https://lh3.googleusercontent.com/pw/AP1GczNjzoTSEyzT2k4L6DNwsI2sVv_pC-lg0r_LTZhOYN5qGMb9jOxxQ2zWs3Od7Fd8Pu5QFUxB-XECn9o8ymiWlZW2hAdaB1IFfTKSshOv3y2Z3YynovKg-V3MOSo290MELgBpoV8D6eyF4SCci_9M7uI=w1533-h863-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczNYW1XW0thA1GjYYdBnmCmSvfRUo9w0N9r8wxLv9eZ7lAMGLr2XQjeUfn2Ksscq9Qm4KFtanuWUxLXVtmuHGQME63jHg4kTJ26ybC0aLH9HDwuEXn8oXCTuAaB0-AXa58GFh83wMW8g0AG7a_RIvJw=w1533-h863-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczPGvuajccMgAcSpiOr2HeaxNJTkS6MHOoJXHY99MCXttl4B1PKZZvS1KJdbLk9Nb8dZK24WXGtLS0Lr0Jcj0G329_IXtbkYFH8noGMuYxp2Cy66P1_H_o3xRdNifO5UUK_QnxxD3l_MW6cEsQxUHhE=w959-h599-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczOGFunMxK6RgSxhCjYiQym8EWASRzPIeiDnf-KGDJ8x6ERiqLhDW19aw-WBTMyymRQczQyVkri3j2TBOhfLzZG-U9ngRUhCCIuzU3_MCBlKRiNIz8QPBTh_KE09c47NSIv1WjKuMt71mt9KPc7GaSk=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczMH5_0dBJKUqikvuLKxUbXHysIzbCRtGGlvbx0JiYuA-GPXL1cHeTmpw5nrSW2uSo8fLw3n4aR_IJRF6o2lyA4CCFzNVLXCdlWaslgh4Xol9Jin2jpuLJA5YGSu10z2kLo42kgcKYd2y6AeFaDtoMk=w959-h599-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczO0iW2dJKDhfzjQQpwh1w-0-foRgX4Ts_mYrtiflrTl8L1hwthbx_mr_KVObL7KgP5mSIQxZhn1rT9zB3bR4sPFhj5U6sIFJ5tnr3Wi2x4yXSybY0RY3_D7myb8WT5SVYMTAmrUKVroWrOAy6cZ9ts=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczOzHu-ZMlco1b0py6Mcspjt4_gVJ3rIPauzdHpTddQPVcRQmM84hZnAO8FvQX4c10606IWfAUM09-mxX0WY8hMlT64KA9Z0hWyJTZy_gk3VTlFt5WIj46CFK9SwHrjU6O046LNapWM8SCcOniNaP58=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczONqPDNaaC8RWVMbYaTB0JYfuI_C7GTUpFnSXK60hwIgmfyfyNEP8tHMKnIFUJuqanY0c-HqqvE84cStdfPBbv1d1r6v3RJ5MoSjX5yg6KdFtCf6xW3_UyAf_KDNc2cjzkMoAogRBr5urtEagtGs2Y=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczNvMDycPjo9ahIUVKD5YVFnPK7M2p78pRLO5ZqfamNzab-z77u8qmqtf_RMwDdnrCHEGOanm0zoZGoJme_wd0dR-rb7R0Bohf473LrnYEXirNOEJS9YaibO4aafgXBMYdHxclId70wqpTS5JJcDuvI=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczMzkIonQfI5qEmYhzIPUQ_psLQuT3Kh-2qItUfaZuMKvrtSBx6loWE3_b70kUPSnhUW-Kvic8hy1lqCrli5SwobWEaFuQdOiBxoQW6R17MlELqUWvtRjPGBkyAXeFBN6_7P9SbUPkx4frzZaXKUJbs=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczOSalMfl9MGdYcUYHXW0IQielFc1VAj56Ieb1NlwmHxsGiDllBzCUybR633oOjuigFv0pWa6GiW0zDLhQbWjKnXxRHCuCfMfnKzvm1D6h5uTlFfXUDM3ciO0qcT4LicP701F_6krBeX9j9LRIKemu8=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczO9cb0sDC758D89p0qClBim1v59XAvoe4iv3BzkA3pLELnh7yzVW29wyPgD-DmDm9MFFGazVmFbQMi324aoblodZt0XPTtM5GYHvXCzgKnNzfXxMlM8tS0j49PF73wsGXq7DtII0mDstim1ZUKsR9A=w959-h539-s-no-gm',
//     'https://lh3.googleusercontent.com/pw/AP1GczM7jbemQPLrt4qlBYDbPR8XT8bN7gU90vMaz0wW7LACpL-ALTaMZFRF-euCyJ5-w2aPYWZVEzq5jabJ-WCjwpnsmaPdP3W9Rx0f-RAdj3SfimXLG-99N2ZHmz-8BWlh0Vr_eBq2xU2Tg3ZDTZEplrs=w959-h539-s-no-gm',

// ];

// // Set random background
// document.body.style.backgroundImage = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`;

// // Clock and Date
// function updateDateTime() {
//     const now = new Date();
//     const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
//     document.getElementById('clock').textContent = now.toLocaleTimeString(undefined, timeOptions);
//     document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);
// }

// setInterval(updateDateTime, 1000);
// updateDateTime();

// // Search functionality
// document.getElementById('search-input').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         const query = this.value.trim();
//         if (query) {
//             window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
//         }
//     }
// });

// // Shortcuts
// function loadShortcuts() {
//     const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
//     const container = document.getElementById('shortcuts');
//     container.innerHTML = '';
    
//     shortcuts.forEach((shortcut, index) => {
//         const shortcutEl = document.createElement('div');
//         shortcutEl.className = 'shortcut fade-in';
//         shortcutEl.innerHTML = `
//             <img class="shortcut-icon" src="https://www.google.com/s2/favicons?domain=${shortcut.url}&sz=64" alt="${shortcut.name}">
//             <div class="shortcut-info">
//                 <div class="shortcut-title">${shortcut.name}</div>
//                 <div class="shortcut-url">${new URL(shortcut.url).hostname}</div>
//             </div>
//             <div class="shortcut-actions">
//                 <button class="btn-delete" onclick="deleteShortcut(${index})">×</button>
//             </div>
//         `;
//         shortcutEl.addEventListener('click', (e) => {
//             if (!e.target.classList.contains('btn-delete')) {
//                 window.location.href = shortcut.url;
//             }
//         });
//         container.appendChild(shortcutEl);
//     });
// }

// function showAddShortcutModal() {
//     document.getElementById('addShortcutModal').style.display = 'block';
//     document.getElementById('modalBackdrop').style.display = 'block';
//     document.getElementById('shortcutName').focus();
// }
// document.getElementById('addShortcutBtn').addEventListener('click', showAddShortcutModal);
// document.getElementById('cancelBtn').addEventListener('click', hideAddShortcutModal);
// document.getElementById('addShortcutBtn').addEventListener('click', addShortcut);


// function hideAddShortcutModal() {
//     document.getElementById('addShortcutModal').style.display = 'none';
//     document.getElementById('modalBackdrop').style.display = 'none';
//     document.getElementById('shortcutName').value = '';
//     document.getElementById('shortcutUrl').value = '';
// }

// function addShortcut() {
//     const name = document.getElementById('shortcutName').value.trim();
//     let url = document.getElementById('shortcutUrl').value.trim();

//     if (!name || !url) return;

//     if (!/^https?:\/\//i.test(url)) {
//         url = 'https://' + url;
//     }

//     const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
//     shortcuts.push({ name, url });
//     localStorage.setItem('shortcuts', JSON.stringify(shortcuts));

//     hideAddShortcutModal();
//     loadShortcuts();
// }

// function deleteShortcut(index) {
//     const shortcuts = JSON.parse(localStorage.getItem('shortcuts') || '[]');
//     shortcuts.splice(index, 1);
//     localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
//     loadShortcuts();
// }

// // Initialize
// loadShortcuts();

// // Event Listeners
// document.getElementById('modalBackdrop').addEventListener('click', hideAddShortcutModal);
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') hideAddShortcutModal();
// });

// Background images
const backgrounds = [
    'https://lh3.googleusercontent.com/pw/AP1GczNjzoTSEyzT2k4L6DNwsI2sVv_pC-lg0r_LTZhOYN5qGMb9jOxxQ2zWs3Od7Fd8Pu5QFUxB-XECn9o8ymiWlZW2hAdaB1IFfTKSshOv3y2Z3YynovKg-V3MOSo290MELgBpoV8D6eyF4SCci_9M7uI=w1533-h863-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczNYW1XW0thA1GjYYdBnmCmSvfRUo9w0N9r8wxLv9eZ7lAMGLr2XQjeUfn2Ksscq9Qm4KFtanuWUxLXVtmuHGQME63jHg4kTJ26ybC0aLH9HDwuEXn8oXCTuAaB0-AXa58GFh83wMW8g0AG7a_RIvJw=w1533-h863-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczPGvuajccMgAcSpiOr2HeaxNJTkS6MHOoJXHY99MCXttl4B1PKZZvS1KJdbLk9Nb8dZK24WXGtLS0Lr0Jcj0G329_IXtbkYFH8noGMuYxp2Cy66P1_H_o3xRdNifO5UUK_QnxxD3l_MW6cEsQxUHhE=w959-h599-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczOGFunMxK6RgSxhCjYiQym8EWASRzPIeiDnf-KGDJ8x6ERiqLhDW19aw-WBTMyymRQczQyVkri3j2TBOhfLzZG-U9ngRUhCCIuzU3_MCBlKRiNIz8QPBTh_KE09c47NSIv1WjKuMt71mt9KPc7GaSk=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczMH5_0dBJKUqikvuLKxUbXHysIzbCRtGGlvbx0JiYuA-GPXL1cHeTmpw5nrSW2uSo8fLw3n4aR_IJRF6o2lyA4CCFzNVLXCdlWaslgh4Xol9Jin2jpuLJA5YGSu10z2kLo42kgcKYd2y6AeFaDtoMk=w959-h599-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczO0iW2dJKDhfzjQQpwh1w-0-foRgX4Ts_mYrtiflrTl8L1hwthbx_mr_KVObL7KgP5mSIQxZhn1rT9zB3bR4sPFhj5U6sIFJ5tnr3Wi2x4yXSybY0RY3_D7myb8WT5SVYMTAmrUKVroWrOAy6cZ9ts=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczOzHu-ZMlco1b0py6Mcspjt4_gVJ3rIPauzdHpTddQPVcRQmM84hZnAO8FvQX4c10606IWfAUM09-mxX0WY8hMlT64KA9Z0hWyJTZy_gk3VTlFt5WIj46CFK9SwHrjU6O046LNapWM8SCcOniNaP58=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczONqPDNaaC8RWVMbYaTB0JYfuI_C7GTUpFnSXK60hwIgmfyfyNEP8tHMKnIFUJuqanY0c-HqqvE84cStdfPBbv1d1r6v3RJ5MoSjX5yg6KdFtCf6xW3_UyAf_KDNc2cjzkMoAogRBr5urtEagtGs2Y=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczNvMDycPjo9ahIUVKD5YVFnPK7M2p78pRLO5ZqfamNzab-z77u8qmqtf_RMwDdnrCHEGOanm0zoZGoJme_wd0dR-rb7R0Bohf473LrnYEXirNOEJS9YaibO4aafgXBMYdHxclId70wqpTS5JJcDuvI=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczMzkIonQfI5qEmYhzIPUQ_psLQuT3Kh-2qItUfaZuMKvrtSBx6loWE3_b70kUPSnhUW-Kvic8hy1lqCrli5SwobWEaFuQdOiBxoQW6R17MlELqUWvtRjPGBkyAXeFBN6_7P9SbUPkx4frzZaXKUJbs=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczOSalMfl9MGdYcUYHXW0IQielFc1VAj56Ieb1NlwmHxsGiDllBzCUybR633oOjuigFv0pWa6GiW0zDLhQbWjKnXxRHCuCfMfnKzvm1D6h5uTlFfXUDM3ciO0qcT4LicP701F_6krBeX9j9LRIKemu8=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczO9cb0sDC758D89p0qClBim1v59XAvoe4iv3BzkA3pLELnh7yzVW29wyPgD-DmDm9MFFGazVmFbQMi324aoblodZt0XPTtM5GYHvXCzgKnNzfXxMlM8tS0j49PF73wsGXq7DtII0mDstim1ZUKsR9A=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczM7jbemQPLrt4qlBYDbPR8XT8bN7gU90vMaz0wW7LACpL-ALTaMZFRF-euCyJ5-w2aPYWZVEzq5jabJ-WCjwpnsmaPdP3W9Rx0f-RAdj3SfimXLG-99N2ZHmz-8BWlh0Vr_eBq2xU2Tg3ZDTZEplrs=w959-h539-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczMtmHzEPfFWou06tzi3i4BxYSmYdsCaZZ-dLKL8Yg-YN25r2gwcT2SjPrqbz0kPLTyUkkw2jS2ZXdhFc2G-kJUe0MkHZ3PdgKJcFb6rcmEiaZGw50A8hLcda0Hrm0cHPSUGZ-wn2V__T-SHNh9dbL0=w1358-h905-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczMzNSd8silNch2mnOw1JvUvf6Sk29vV_9ipF_gNb2hmFqfuJlGCqtIkHah2rIpiHmN84YV_CIHaz3Wp-EC25-z29pdJBTqdcF0ZAo3VXOOoNWOkO79i3Wmh_fpP4w36GtgOrOI9ArIfIZkhp4e0mBs=w1358-h905-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczNGMkZBfNWZzyGbIr7IBt4u12_vkGUK5GaaFACuIblntnRCmfDMwRBwT1a0n6tmG5_yovyFqgd25Q0bJi7KURCbC_k69Xlrh9sHrQ91ALsgS7XwAzowMlcaavFoSHGlXrUfyNOmoZy274gso3fkQ-A=w1608-h905-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczOg1Zzmu0BGri1YkH2KEZi0GUN3zSmITy7tmJCebb4316eAem9QmoPljqIE7bvbJlGduXJ39_E2R9jyVi2Iz5zg9JyThybKjKFOe6P_bxH2Dzh7qHoFve0ANl59MpljZSGrNjwolwuTl0S2SHivT9U=w1608-h905-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczPE7PU2pat6c9d_4Ry_HSdil-pQI8EcZyZTwpGL0TNrZrna69Ed0K00IJRig4SJMqwTfnefH8wL6S0G-USuUW6JMJ3Ld1fy6Mlsi0D8v3Y8-Jgj-omYBIYf8uzihhr4VO4QGaFn02wenf7xdR9mOrw=w1358-h905-s-no-gm',
    'https://lh3.googleusercontent.com/pw/AP1GczMJ2E9v0tsc9YML5lTh-0DaI2vef_UOAx6nptVp05wc6j0Uui3obuEXq9MYfw1MZTQXiyoPcNVANMYn-U3aCNaJ4jvx91_AvuoP9fj8fB5U-Fgy9Wki2x8CepmbBl0Ypx7Gj9IL5zUmGRHUPWT2k3A=w1356-h905-s-no-gm',
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
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('date').textContent = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Search functionality
document.getElementById('search-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
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
                <div class="shortcut-url">${new URL(shortcut.url).hostname}</div>
            </div>
            <div class="shortcut-actions">
                <button class="btn-delete" data-index="${index}">×</button>
            </div>
        `;

        shortcutEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-delete')) {
                window.open(shortcut.url, '_blank');
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
