$(function() {
    var controller = new ScrollMagic.Controller();

    var titleScene = new ScrollMagic.Scene({
        triggerElement: '#title',
        duration: 10
    })
    .setPin('#page-2')
    //.addIndicators()
    .addTo(controller);

    var forewordScene = new ScrollMagic.Scene({
        triggerElement: '#foreword',
        duration: 10
    })
    .setPin('#foreword')
    //.addIndicators()
    .addTo(controller);

    var mjvsnbaScene = new ScrollMagic.Scene({
        triggerElement: '#page-3',
        duration: 10
    })
    .setPin('#page-3')
    //.addIndicators()
    .addTo(controller);

    var mjvsskScene = new ScrollMagic.Scene({
        triggerElement: '#page-5',
        duration: 10
    })
    .setPin('#page-5')
    //.addIndicators()
    .addTo(controller);

    var stephScene = new ScrollMagic.Scene({
        triggerElement: '#steph-page',
        duration: 10
    })
    .setPin('#steph-page')
    //.addIndicators()
    .addTo(controller);

    var klayScene = new ScrollMagic.Scene({
        triggerElement: '#klay-page',
        duration: 10
    })
    .setPin('#klay-page')
    //.addIndicators()
    .addTo(controller);

    var drayScene = new ScrollMagic.Scene({
        triggerElement: '#dray-page',
        duration: 10
    })
    .setPin('#dray-page')
    //.addIndicators()
    .addTo(controller);


    var fourfiveScene = new ScrollMagic.Scene({
        triggerElement: '#fourfive-season',
        duration: 10
    })
    .setPin('#fourfive-season')
    //.addIndicators()
    .addTo(controller);

    var fivesixScene = new ScrollMagic.Scene({
        triggerElement: '#fivesix-season',
        duration: 10
    })
    .setPin('#fivesix-season')
    //.addIndicators()
    .addTo(controller);

    var sixsevenScene = new ScrollMagic.Scene({
        triggerElement: '#sixseven-season',
        duration: 10
    })
    .setPin('#sixseven-season')
    //.addIndicators()
    .addTo(controller);

    var seveneightScene = new ScrollMagic.Scene({
        triggerElement: '#seveneight-season',
        duration: 10
    })
    .setPin('#seveneight-season')
    //.addIndicators()
    .addTo(controller);

    var releasereportScene = new ScrollMagic.Scene({
        triggerElement: '#releasereports',
        duration: 10
    })
    .setPin('#releasereports')
    //.addIndicators()
    .addTo(controller);
});