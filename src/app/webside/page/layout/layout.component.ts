import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  ngOnInit(): void {
    this.createScrollTrigger1();
    this.createScrollTrigger2();
  }

  createScrollTrigger1(){
    let tl = gsap.timeline({
      scrollTrigger:{
        scroller: '.layout',
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        toggleActions: "restart pause reverse pause",
        markers: false
      }
    })

     tl.to('#fanta',{
      top: "120%",
      left: "0%",
      width: "40%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#orange-cut",{
       top: "160%",
       left: "23%",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#orange",{
       top: "170%",
       right: "10%",
       width: "15%",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#leaf",{
       top: "110%",
       left: "80%",
       rotate: "130deg",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#leaf2",{
       top: "150%",
       left: "0%",
       rotate: "130deg",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')

  }

  createScrollTrigger2(){
    let tl2 = gsap.timeline({
      scrollTrigger:{
        scroller: '.layout',
        trigger: ".three",
        start: "25% 95%",
        end: "50% 50%",
        scrub: true,
        markers: false,
        toggleActions: "restart pause reverse pause",

      }
    })

    tl2.to("#fanta",{
      top: "215%",
      left: "32%",
      width: "35%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#orange-cut",{
      top: "210%",
      left: "40%",
      width:"20%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')

    tl2.to("#orange",{
      top: "250%",
      right: "30%",
      width: "15%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#leaf",{
      top: "225%",
      left: "0%",
      rotate: "160deg",
      zIndex: "10",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#leaf2",{
      top: "230%",
      left: "90%",
      rotate: "160deg",
      zIndex: "10",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')

    tl2.from("#cocacola",{
      left: "-30%",
      rotate:"-90deg",
      delay: 1
    }, 'orange2')
    tl2.from(".lemon1",{
      left: "-30%",
    }, 'orange2')
    tl2.from("#pepsi",{
      left: "130%",
      rotate:"90deg",
      delay: 1
    }, 'orange2')
    tl2.from(".lemon2",{
      left: "130%",
      delay: 1
    }, 'orange2')
  }
}
