import $ from './jq-xtn';

function Flow(myVue) {
  const Con = new myVue.$scrollmagic.Controller();
  const rewind = !true;

  function sectionAni() {
    let def = {
      scene: {
        offset: -222,
        reverse: rewind,
        triggerElement: this,
      },
    };
    def.scene = new myVue.$scrollmagic.Scene(def.scene);
    Con.addScene(def.scene.setClassToggle(this, 'ani'));
  }

  function flowChart(ele, num) {
    let def = {
      scene: {
        offset: -111,
        reverse: rewind,
        triggerElement: ele,
        triggerHook: 'onEnter',
      },
      tween: {
        delay: 2,
        ease: myVue.$gsap.Bounce.easeOut,
        strokeDashoffset: num,
      },
    };

    def.scene = new myVue.$scrollmagic.Scene(def.scene);
    def.tween = myVue.$gsap.TweenMax.to(ele, 1, def.tween);
    Con.addScene(def.scene.setTween(def.tween));
  }

  setTimeout(function() {
    flowChart('.tooth .chart svg .line-fill', 999);
    $('section').each(sectionAni);
    // $('.flow').addClass('ini');
  }, 999);
}

export default Flow;
