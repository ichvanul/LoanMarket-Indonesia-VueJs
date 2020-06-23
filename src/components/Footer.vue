<template>
  <div class="container-footer">
    <div class="header-footer">
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Loan Market</h5>
        </div>
        <div class="content-footer evn-desc">
          <div><p>Cari Loan Advisor</p></div>
          <div><p>Produk</p></div>
          <div><p>Informasi & Bantuan</p></div>
          <div><p>Tentang Kami</p></div>
          <div><p>Karir</p></div>
          <div><p>Berita</p></div>
          <div><p>Kebijakan Privasi</p></div>
          <div><p>Syarat dan Ketentuan</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Produk</h5>
        </div>
        <div class="content-footer evn-desc">
          <div><p>Kredit Rumah</p></div>
          <div><p>KPR Refinancing</p></div>
          <div><p>Membandingkan Produk KPR</p></div>
          <div><p>Biaya - Biaya Dalam Proses KPR</p></div>
          <div><p>Pinjaman Untuk Komersial</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Informasi & Bantuan</h5>
        </div>
        <div class="content-footer env-desc">
          <div><p>Menggunakan Jasa Loan Adviser</p></div>
          <div><p>Membeli Rumah Tinggal</p></div>
          <div><p>Kapasitas Peminjaman</p></div>
          <div><p>Temukan Properti Yang Tepat</p></div>
          <div><p>Glosarium</p></div>
        </div>
      </div>
      <div class="body-footer">
        <div class="title-footer">
          <h5 class="evn-title">Hubungi Kami</h5>
        </div>
        <div class="content-footer evn-desc">
          <div><p>(021) 2788 9788</p></div>
        </div>
      </div>
    </div>
    <div class="footer-footer">
      <div class="socmed-footer">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.container-footer {
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('../assets/home.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  .header-footer{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .body-footer{
      .title-footer{
        padding: 0;
        h5{
          font-size: 20px;
          font-weight: bolder;
          color: white;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
          padding: 0 0 20px 0;
        }
      }
      .content-footer{
        p{
          font-size: 13px;
          font-weight: 400;
          color: white;
          margin: 0;
          padding: 0 0 10px 0;
          cursor: pointer;
        }
      }
    }
  }
  .footer-footer{
    display: flex;
    justify-content: center;
    padding: 40px 0 0;
    width: 100%;
    .socmed-footer{
      i{
        padding: 0 30px;
        font-size: 35px;
        color: #00a8ea;
        cursor: pointer;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container-footer {
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('../assets/home.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 15px;
  .header-footer{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .body-footer{
      .title-footer{
        padding: 0;
        h5{
          font-size: 14px;
          font-weight: bolder;
          color: white;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
          padding: 0 0 20px 0;
        }
      }
      .content-footer{
        p{
          font-size: 11px;
          font-weight: 400;
          color: white;
          margin: 0;
          padding: 0 0 10px 0;
          cursor: pointer;
        }
      }
    }
  }
  .footer-footer{
    display: flex;
    justify-content: center;
    padding: 40px 0 0;
    width: 100%;
    .socmed-footer{
      i{
        padding: 0 16px;
        font-size: 24px;
        color: #00a8ea;
        cursor: pointer;
      }
    }
  }
}
}
</style>
