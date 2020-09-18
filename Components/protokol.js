import React from 'react'
import './protokol.css';

class Protokol extends React.Component {
    render(){
        return(
            <div>
                <div class="container">
                    <div class="title">PROTOKOL KESEHATAN COVID-19</div>
                </div>
                <hr/>
                <div class="pencegahan">
                    <p>1. Menerapkan physical distancing dan isolasi mandiri.</p>
                    <p>2. Menggunakan alat pelindung diri berupa masker yang menutupi 
                    hidung dan mulut jika harus keluar rumah atau berinteraksi dengan 
                    orang lain yang tidak diketahui status kesehatannya (yang mungkin 
                    dapat menularkan COVID-19).</p>
                    <p>3. Menjaga daya tahan tubuh.</p>
                    <p>4. Membersihkan tangan secara teratur dengan cuci tangan pakai 
                    sabun dan air mengalir selama 40-60 detik atau menggunakan cairan 
                    antiseptik berbasis alkohol (hand sanitizer) minimal 20 – 30 detik. 
                    Hindarimenyentuh mata, hidung dan mulut dengan tangan yang tidak bersih.</p>
                    <p>5. Membersihkan rumah dan melakukan disinfeksi secara rutin</p>
                    <p>6. Membatasi diri terhadap interaksi atau kontak dengan orang 
                    lain yang tidak diketahui status kesehatannya.</p>
                    <p>7. Saat tiba di rumah setelah bepergian, segera mandi dan berganti 
                    pakaian sebelum kontak dengan anggota keluarga di rumah.</p>
                </div>
                <hr/>
                <div class="container2">
                    <div class="mari">Mari kita terapkan protokol yang telah ditetapkan pemerintah!</div>
                </div>
            </div>
        )
    }
}
export default Protokol;