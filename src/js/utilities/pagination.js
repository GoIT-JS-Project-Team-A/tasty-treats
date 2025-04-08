import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

function resizeVisPage() { // Çöznürlüğe göre bölüm sayısı
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        return 2;
    }

    if (screenWidth >= 768) {
        return 3;
    }
}