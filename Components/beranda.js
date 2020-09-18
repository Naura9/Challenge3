import React from 'react'
import './beranda.css';

class Beranda extends React.Component {
    render() {
        return(
            <div> 
                <div class="container">
                    <div class="title1">COVID-19?</div>
                    <div class="adalah">
                        <p>Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) 
                        adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus 
                        ini disebut COVID-19. </p>
                        <p>Coronavirus adalah kumpulan virus yang bisa menginfeksi sistem pernapasan. 
                        Pada banyak kasus, virus ini hanya menyebabkan infeksi pernapasan ringan, 
                        seperti flu. Namun, virus ini juga bisa menyebabkan infeksi pernapasan berat, 
                        seperti infeksi paru-paru (pneumonia).</p>
                        <p>Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali 
                        ditemukan di kota Wuhan, China pada akhir Desember 2019. Virus ini menular 
                        dengan sangat cepat dan telah menyebar ke hampir semua negara, termasuk Indonesia, 
                        hanya dalam waktu beberapa bulan.</p>
                        <p>Hal tersebut membuat beberapa negara menerapkan kebijakan untuk memberlakukan 
                        lockdown dalam rangka mencegah penyebaran virus Corona. Di Indonesia sendiri, 
                        diberlakukan kebijakan Pembatasan Sosial Berskala Besar (PSBB) untuk menekan penyebaran virus ini.</p> 
                    </div>
                </div>
                <hr/> 
                <div>
                    <div class="title2">GEJALA COVID-19</div>
                    <div class="gejala">
                        <p>Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu
                            demam (suhu tubuh di atas 38 derajat Celsius),
                            batuk kering,
                            sesak napas</p>
                        <p>Ada beberapa gejala lain yang juga bisa muncul pada infeksi virus Corona meskipun lebih jarang, yaitu 
                            diare,
                            sakit kepala,
                            konjungtivitis,
                            hilangnya kemampuan mengecap rasa atau mencium bau, Dan
                            ruam di kulit.</p>
                    </div>
                </div>
                <hr/>
                <div class="container3">
                    <div class="title3 text-warning">PENULARAN COVID-19</div>
                    <div class="penularan">
                        <p>> Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 batuk atau bersin</p>
                        <p>> Memegang mulut atau hidung tanpa mencuci tangan terlebih dulu setelah menyentuh benda yang terkena cipratan ludah penderita COVID-19</p>
                        <p>> Kontak jarak dekat dengan penderita COVID-19</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beranda;