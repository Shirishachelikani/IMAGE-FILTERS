
        function applyFilter(filter) {
            const image = document.getElementById('image');
            switch (filter) {
                case 'none':
                    image.style.filter = 'none';
                    break;
                case 'grayscale':
                    image.style.filter = 'grayscale(100%)';
                    break;
                case 'sepia':
                    image.style.filter = 'sepia(100%)';
                    break;
                case 'blur':
                    image.style.filter = 'blur(5px)';
                    break;
                case 'brightness':
                    image.style.filter = 'brightness(150%)';
                    break;
                case 'contrast':
                    image.style.filter = 'contrast(200%)';
                    break;
                default:
                    break;
                }
            }


