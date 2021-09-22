import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer__row">
                <div className="footer__row--item">
                    <h3>Keşfet</h3>
                    <a href="https://www.beinconnect.com.tr/">FİLM</a>
                    <a href="https://www.beinconnect.com.tr/">DİZİ</a>
                    <a href="https://www.beinconnect.com.tr/">SPOR</a>
                    <a href="https://www.beinconnect.com.tr/">ÇOCUK</a>
                </div>
                <div className="footer__row--item">
                    <h3>Kısa Yollar</h3>
                    <a href="https://www.beinconnect.com.tr/">Site Haritası</a>
                    <a href="https://www.beinconnect.com.tr/">Planlar</a>
                    <a href="https://www.beinconnect.com.tr/">Kupon Kodu</a>
                    <a href="https://www.beinconnect.com.tr/">Sıkça Sorulan Sorular</a>
                </div>
                <div className="footer__row--item">
                    <h3>Legal</h3>
                    <a href="https://www.beinconnect.com.tr/">Telif Hakkı Uyarısı</a>
                    <a href="https://www.beinconnect.com.tr/">Müşteri Aydınlatma Metni</a>
                    <a href="https://www.beinconnect.com.tr/">Çerez Aydınlatma Metni</a>
                </div>
            </div>
            <br />
            <hr />
            <br/>
            <p className="footer__copyright">Digiturk bir beIN MEDIA GROUP kuruluşudur. © 2021 Her hakkı saklıdır.</p>

        </>
    )
}

export default Footer
