GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")

})