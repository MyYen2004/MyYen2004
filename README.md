<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV - Hà Tường Vy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0 150px;
                padding: 20px;
                background-color: #f4f4f4;
            }
            h1 {
                text-align: center;
                color: #333;
            }
            section {
                background: white;
                padding: 20px;
                margin: 10px 0;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #444;
                display: flex;
                align-items: center;
            }
            h2 i {
                margin-left: 10px;
                margin-right: 8px; 
            }
            ul {
                padding-left: 20px;
                list-style-type: disc;
            }
            li {
                margin: 5px 0;
            }
            img {
                max-width: 170px; 
                border-radius: 50%; 
                display: block;
                margin: 0 auto; 
            }
            .skills-container, .interests-container {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }
            .skills-item, .interests-item {
                border-radius: 5px;
                padding: 10px;
                flex: 1 1 calc(30% - 20px);
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }
            
            /* CSS for mobile */
            @media only screen and (max-width: 768px) {
                body {
                    margin: 0 20px;
                }
                section {
                    padding: 15px;
                }
                img {
                    max-width: 120px; 
                }
                h1 {
                    font-size: 24px;
                }
                h2 {
                    font-size: 20px;
                }
                p, li {
                    font-size: 16px;
                }
                ul {
                    padding-left: 10px;
                }
                .skills-item, .interests-item {
                    flex: 1 1 100%; 
                }
            }
        </style>
    </head>
    <body>

        <h1>Hà Tường Vy</h1>
        <img src="avatar.jpg" alt="Hà Tường Vy">

        <section>
            <h2>Giới thiệu bản thân 
                <i class="fas fa-user"></i>
            </h2>
            <p>Tôi là sinh viên năm ba ngành Công nghệ thông tin tại trường Đại học Sài Gòn, chuyên ngành Kỹ thuật phần mềm. Hiện tại, tôi đang từng bước trau dồi và mở rộng kiến thức trong lĩnh vực lập trình, phát triển phần mềm, cũng như kỹ năng giải quyết vấn đề. Tôi đã tham gia vào một số dự án học tập nhỏ và đang tìm kiếm thêm cơ hội để áp dụng các kiến thức đã học vào thực tế nhằm phát triển bản thân trong ngành công nghệ.</p>
        </section>

        <section>
            <h2>Học vấn (Từ năm 2022 - nay) 
                <i class="fas fa-graduation-cap"></i>
            </h2>
            <ul>
                <li>Trường Đại học Sài Gòn</li>
                <li>Khoa Công nghệ thông tin</li>
                <li>Chuyên ngành Kỹ thuật phần mềm</li>
                <li>GPA: 2.79/4.00</li>
            </ul>
        </section>

        <section>
            <h2>Kỹ năng 
                <i class="fas fa-code"></i>
            </h2>
            <div class="skills-container">
                <div class="skills-item">
                    <h4>Ngôn ngữ lập trình</h4>
                    <ul>
                        <li>Java</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div class="skills-item">
                    <h4>Công cụ</h4>
                    <ul>
                        <li>NetBeans</li>
                        <li>Eclipse</li>
                        <li>Visual Studio Code</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div class="skills-item">
                    <h4>Kỹ năng khác</h4>
                    <ul>
                        <li>Lập kế hoạch</li>
                        <li>Quản lý thời gian hiệu quả</li>
                        <li>Kỹ năng làm việc nhóm</li>
                        <li>Dễ dàng thích nghi với môi trường mới</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>Đồ án nhóm 
                <i class="fas fa-project-diagram"></i>
            </h2>
            <div>
                <h4>Phát triển ứng dụng quản lý bán đồng hồ đeo tay</h4>
                <div>Đồ án bao gồm: Quản lý sản phẩm, đơn hàng, nhập hàng, khuyến mãi, khách hàng, nhân viên và thống kê.</div>
                <p>Vai trò: Người phát triển ứng dụng, sử dụng ngôn ngữ Java, cơ sở dữ liệu MySQL.</p>
                <span>Thời gian thực hiện: Năm 2023</span>
            </div>
            <div>
                <h4>Phát triển website giới thiệu cửa hàng bán đồng hồ đeo tay</h4>
                <div>Đồ án này tập trung vào việc phát triển một website với giao diện thân thiện và dễ sử dụng, giúp khách hàng tìm hiểu về các sản phẩm đồng hồ, bao gồm hình ảnh, thông tin và giá cả.</div>
                <p>Vai trò: Thiết kế giao diện người dùng, lập trình back-end và tích hợp cơ sở dữ liệu để quản lý thông tin sản phẩm.</p>
                <span>Thời gian thực hiện: Năm 2023</span>
            </div>
        </section>

        <section>
            <h2>Sở thích 
                <i class="fas fa-heart"></i>
            </h2>
            <div class="interests-container">
                <div class="interests-item">
                    <li>Tham gia các hội thảo công nghệ</li>
                </div>
                <div class="interests-item">
                    <li>Thử nghiệm công nghệ mới</li>
                </div>
                <div class="interests-item">
                    <li>Nghe nhạc</li>
                </div>
                <div class="interests-item">
                    <li>Ca hát</li>
                </div>
                <div class="interests-item">
                    <li>Chơi thể thao</li>
                </div>
                <div class="interests-item">
                    <li>Du lịch</li>
                </div>
            </div>
        </section>

        <section>
            <h2>Thông tin liên hệ 
                <i class="fas fa-envelope"></i>
            </h2>
            <ul>
                <li>Email: hatuongvy1451@gmail.com</li>
                <li>GitHub: 
                    <a href="https://github.com/hatuongvy1451">https://github.com/hatuongvy1451</a>
                </li>
            </ul>
        </section>

        <section>
            <h2>Đang tiến hành nghiên cứu 
                <a href="https://www.google.com" target="_blank">
                    <i class="fas fa-search search-icon" style="font-size: 24px;"></i>
                </a>
            </h2>
            <ul>
                <li><a href="emotion-recognition.html">Emotion Recognition</a></li>
            </ul>
            <div>
                <a href="#" target="_blank">[Nguyễn Ngọc An]</a> |
                <a href="#" target="_blank">[Trần Mỹ Yên]</a>
            </div>
        </section>        

    </body>
</html>

