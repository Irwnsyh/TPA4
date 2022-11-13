import React from 'react'
import './AboutStyles.css'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="content">
                    <img src={"images/profil2.JPG"} alt="profil" className="profil2"/>
                    <h2>About <span> Me</span></h2>
                    <p> Hay! Nama saya <strong> Irwansyah</strong>. Biasa dipanggil <strong>Irwan</strong>. 
                        Saya lahir di Kota Bontang, Kalimantan Timur, Indonesia pada tanggal 08 Desember 2001. 
                        Saat ini saya seorang Mahasiswa dari Universitas Mulawarman, Fakultas Teknik, Prodi Sistem Informasi.</p>
                    <p> Saat ini saya sedang berfokus pada Program Studi Independen Kampus Merdeka Skilvul #TECH4IMPACT: Front-End Web Development Batch3. 
                        Saya mengambil program ini karena saya ingin lebih memahami bagaimana progress pembuatan sebuah Web.</p>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
