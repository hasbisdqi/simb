const mockArticleData = [
  {
    title: "Memahami Tsunami dan tanda-tandanya",
    body: " Tsunami adalah gelombang besar yang disebabkan oleh gangguan di dasar laut, seperti gempa bumi, longsor bawah laut, atau letusan gunung api. Gelombang tsunami dapat bergerak sangat cepat dan mencapai pantai dalam hitungan menit. Oleh karena itu, memahami tanda-tanda awal sangat penting untuk keselamatan. Tanda pertama yang perlu diwaspadai adalah gempa kuat yang membuat Anda sulit berdiri atau berlangsung lebih dari 20 detik. Jika Anda merasakan gempa seperti itu di daerah pantai, anggap itu sebagai peringatan alami tsunami. Tanda lainnya adalah surutnya air laut secara tiba-tiba dan tidak biasa—pantai tiba-tiba menjadi lebih jauh dari biasanya dan karang atau ikan tampak bermunculan. Suara gemuruh dari arah laut juga dapat menjadi pertanda. Jika salah satu dari tanda tersebut muncul, jangan menunggu sirene atau peringatan resmi. Segera menjauh dari pantai dan bergerak menuju tempat yang tinggi. Semakin cepat Anda mengambil tindakan, semakin besar peluang Anda untuk selamat. "
  },
  {
    title: "Cara melakukan evakuasi saat terjadi tsunami",
    body: " Evakuasi adalah langkah paling penting ketika ancaman tsunami muncul. Kunci utamanya adalah bergerak cepat, tenang, dan mengikuti rencana yang sudah Anda ketahui sebelumnya. Ketika gempa kuat terjadi, segera berhenti dari apa pun yang sedang Anda lakukan dan mengungsi tanpa menunda. Jika Anda berada di dalam bangunan, keluar dengan segera melalui jalur evakuasi. Hindari menggunakan lift dan prioritaskan tangga darurat. Jika Anda berada di jalan atau area terbuka, langsung menuju tempat yang lebih tinggi seperti bukit, gedung bertingkat kokoh, atau area aman yang sudah ditandai pemerintah sebagai zona evakuasi. Bagi yang membawa keluarga, terutama anak-anak dan lansia, pastikan mereka berada di dekat Anda. Jangan menghabiskan waktu untuk mengumpulkan barang—waktu adalah hal yang paling berharga dalam situasi ini. Setelah mencapai lokasi evakuasi, tetap berada di sana hingga pihak berwenang menyatakan kondisi aman, karena gelombang tsunami bisa datang berkali-kali. "
  },
  {
    title: "Mitigasi Jangka Panjang untuk Mengurangi Risiko Tsunami",
    body: " Mitigasi jangka panjang bertujuan mengurangi dampak tsunami terhadap masyarakat. Langkah pertama adalah memahami peta bahaya tsunami di wilayah Anda. Pemerintah biasanya menyediakan peta yang menunjukkan zona merah (sangat berisiko), zona kuning (risiko sedang), dan zona hijau (aman). Tinggal atau beraktivitas di zona aman dapat menurunkan risiko. Membangun rumah dan fasilitas penting di area yang lebih tinggi juga merupakan upaya mitigasi yang efektif. Jika tidak memungkinkan, gunakan bangunan berstruktur tahan gempa yang dirancang untuk mengurangi kerusakan gelombang. Selain itu, vegetasi seperti mangrove di pesisir dapat membantu mengurangi energi gelombang. Yang tidak kalah penting adalah edukasi dan latihan evakuasi rutin. Masyarakat perlu familiar dengan jalur evakuasi, titik kumpul, serta cara bereaksi cepat. Dengan pengetahuan yang tepat dan persiapan yang konsisten, risiko korban dan kerusakan akibat tsunami dapat ditekan secara signifikan. "
  },
]


export type ArticlePostId = number; // change to whatever you want

export default function useArticleData(id: ArticlePostId): { title: string, body: string } {
  return { title: mockArticleData[id].title, body: mockArticleData[id].body };
}

