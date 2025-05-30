onload = () =>{
        document.body.classList.remove("container");
};
setTimeout(() => {
        const message = document.querySelector('.message');
        message.style.opacity = 1;
        message.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 6000); // 6 วินาทีหลังจากหน้าเว็บโหลด