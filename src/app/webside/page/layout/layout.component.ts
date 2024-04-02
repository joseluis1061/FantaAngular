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
        start: "100% 195%",
        end: "50% 50%",
        scrub: 3,
        toggleActions: "restart pause reverse pause",
        markers: false
      }
    })

     tl.to('#fanta',{
      top: "220%",
      left: "0%",
      width: "40%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
     }, 'orange')
     tl.to("#orange-cut",{
       top: "260%",
       left: "23%",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#orange",{
       top: "270%",
       right: "10%",
       width: "15%",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#leaf",{
       top: "210%",
       left: "80%",
       rotate: "130deg",
       ease: "cubic-bezier(0.19, 1, 0.22, 1)"
     }, 'orange')
     tl.to("#leaf2",{
       top: "250%",
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
        start: "125% 195%",
        end: "50% 50%",
        scrub: 3,
        markers: false,
        toggleActions: "restart pause reverse pause",

      }
    })

    tl2.to("#fanta",{
      top: "315%",
      left: "32%",
      width: "35%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#orange-cut",{
      top: "310%",
      left: "40%",
      width:"20%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      rotate: "360deg",
      delay: 1
    }, 'orange2')

    tl2.to("#orange",{
      top: "350%",
      right: "30%",
      width: "15%",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#leaf",{
      top: "325%",
      left: "0%",
      rotate: "160deg",
      zIndex: "10",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')
    tl2.to("#leaf2",{
      top: "330%",
      left: "90%",
      rotate: "160deg",
      zIndex: "10",
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 1
    }, 'orange2')

    tl2.from("#cocacola",{
      left: "-30%",
      rotate:"-90deg",
    }, 'orange2')
    tl2.from(".lemon1",{
      left: "-30%",
      rotate: "360deg",
      delay: 1,
    }, 'orange2')
    tl2.from("#pepsi",{
      left: "130%",
      rotate:"90deg",
    }, 'orange2')
    tl2.from(".lemon2",{
      left: "130%",
      delay: 1,
      rotate: "360deg",
    }, 'orange2')
  }
}
