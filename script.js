
function generateSoal() {
    const sekolah = document.getElementById("sekolah").value;
    const guru = document.getElementById("guru").value;
    const mapel = document.getElementById("mapel").value;
    const kelas = document.getElementById("kelas").value;
    const materi = document.getElementById("materi").value;
    const jumlah = document.getElementById("jumlah").value;
    const bentuk = document.getElementById("bentuk").value;

    if (!sekolah || !guru || !mapel || !kelas || !materi) {
        alert("Mohon lengkapi seluruh identitas dan materi!");
        return;
    }

    if (!jumlah || Number(jumlah) < 1) {
        alert("Jumlah soal harus minimal 1!");
        return;
    }

    const hasil = document.getElementById("hasil");

    hasil.innerHTML = `
        <h3>DATA GENERATE SOAL</h3>
        <p><b>Sekolah:</b> ${escapeHTML(sekolah)}</p>
        <p><b>Guru:</b> ${escapeHTML(guru)}</p>
        <p><b>Mata Pelajaran:</b> ${escapeHTML(mapel)}</p>
        <p><b>Kelas:</b> ${escapeHTML(kelas)}</p>
        <p><b>Materi:</b> ${escapeHTML(materi)}</p>
        <p><b>Jumlah Soal:</b> ${Number(jumlah)}</p>
        <p><b>Bentuk Soal:</b> ${escapeHTML(bentuk)}</p>
        <hr>
        <p>Data berhasil diproses. Generator AI akan dikembangkan pada tahap berikutnya.</p>
    `;
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}
