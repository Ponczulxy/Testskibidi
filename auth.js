
const VALID_CODES = [
    "UNIMC-4921", "UNIMC-8832", "UNIMC-1029", "UNIMC-7746", "UNIMC-3301", "UNIMC-6655", "UNIMC-5432", "UNIMC-9900", "UNIMC-1122", "UNIMC-3344",
    "UNIMC-X921", "UNIMC-L442", "UNIMC-P001", "UNIMC-K882", "UNIMC-M773", "UNIMC-A1B2", "UNIMC-C3D4", "UNIMC-E5F6", "UNIMC-G7H8", "UNIMC-I9J0",
    "UNIMC-Z0X9", "UNIMC-V8B7", "UNIMC-N6M5", "UNIMC-Q4W3", "UNIMC-E2R1", "UNIMC-T1Y2", "UNIMC-U3I4", "UNIMC-O5P6", "UNIMC-A7S8", "UNIMC-D9F0",
    "UNIMC-G1H2", "UNIMC-J3K4", "UNIMC-L5M6", "UNIMC-N7B8", "UNIMC-V9C0", "UNIMC-X1Z2", "UNIMC-Q3A4", "UNIMC-W5S6", "UNIMC-E7D8", "UNIMC-R9F0",
    "UNIMC-T1G2", "UNIMC-Y3H4", "UNIMC-U5J6", "UNIMC-I7K8", "UNIMC-O9L0", "UNIMC-P1M2", "UNIMC-A3N4", "UNIMC-S5B6", "UNIMC-D7V8", "UNIMC-F9C0",
    "UNIMC-H1X2", "UNIMC-J3Z4", "UNIMC-K5Q6", "UNIMC-L7W8", "UNIMC-M9E0", "UNIMC-N1R2", "UNIMC-B3T4", "UNIMC-V5Y6", "UNIMC-C7U8", "UNIMC-X9I0",
    "UNIMC-Z1O2", "UNIMC-S3P4", "UNIMC-D5A6", "UNIMC-F7S8", "UNIMC-G9D0", "UNIMC-H1F2", "UNIMC-J3G4", "UNIMC-K5H6", "UNIMC-L7J8", "UNIMC-M9K0",
    "UNIMC-N1L2", "UNIMC-B3M4", "UNIMC-V5N6", "UNIMC-C7B8", "UNIMC-X9V0", "UNIMC-Z1C2", "UNIMC-Q3X4", "UNIMC-W5Z6", "UNIMC-E7Q8", "UNIMC-R9W0",
    "UNIMC-T1E2", "UNIMC-Y3R4", "UNIMC-U5T6", "UNIMC-I7Y8", "UNIMC-O9U0", "UNIMC-P1I2", "UNIMC-A3O4", "UNIMC-S5P6", "UNIMC-D7A8", "UNIMC-F9S0",
    "UNIMC-H1D2", "UNIMC-J3F4", "UNIMC-K5G6", "UNIMC-L7H8", "UNIMC-M9J0", "UNIMC-N1K2", "UNIMC-B3L4", "UNIMC-V5M6", "UNIMC-C7N8", "UNIMC-X9B0"
];

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('verify-btn');
    const input = document.getElementById('access-code-input');
    const errorMsg = document.getElementById('error-msg');

    btn.onclick = () => {
        const code = input.value.trim().toUpperCase();

        
        let usedCodes = JSON.parse(localStorage.getItem('unimc_used_codes')) || [];

        
        if (usedCodes.includes(code)) {
            showErr("KOD ZOSTAŁ JUŻ WYKORZYSTANY!");
            input.value = "";
            return;
        }

        
        if (VALID_CODES.includes(code)) {
            
            usedCodes.push(code);
            localStorage.setItem('unimc_used_codes', JSON.stringify(usedCodes));
            
            
            window.location.href = "quiz.html";
        } else {
            showErr("NIEPRAWIDŁOWY KOD!");
            input.value = "";
        }
    };

    function showErr(text) {
        errorMsg.innerText = text;
        errorMsg.style.opacity = "1";
        input.style.borderColor = "var(--wrong)";
        
        
        input.animate([
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0)' }
        ], { duration: 200, iterations: 2 });
        
        setTimeout(() => {
            errorMsg.style.opacity = "0";
            input.style.borderColor = "var(--glass-border)";
        }, 3000);
    }
});