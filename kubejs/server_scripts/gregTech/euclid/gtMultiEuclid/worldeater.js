ServerEvents.recipes((event) => {

    event.recipes.gtceu.world_eater_tamer()
        .itemInputs(
            '16x kubejs:animated/var2',
            '16x kubejs:euclid/nullingot',
            'gtceu:fracturedfossilmaterial_frame',
            '32x kubejs:animated/morpher'
        )
        .itemOutputs(
            'kubejs:animated/thatfrombehind'
        )
        .duration(600)
        .addData("required_state", "ACTIVE")
        .addData("required_casing_tier", 2)
        .addData("operation", "test")

    event.recipes.gtceu.world_eater_tamer()
        .itemInputs(
            '16x kubejs:bioresistor',
            '16x kubejs:biocapacitor',
            '4x kubejs:euclid/euclid_mainframe',
            'gtceu:delerianmetalalloy_ingot'
        )
        .itemOutputs(
            'kubejs:animated/morpher'
        )
        .duration(600)
        .addData("required_state", "ACTIVE")
        .addData("required_casing_tier", 2)
        .addData("operation", "test")
    
    event.recipes.gtceu.world_eater_tamer()
        .itemInputs(
            'kubejs:animated/diacircuit'
        )
        .duration(600)
        .addData("required_state", "PREPARED")
        .addData("required_casing_tier", 2)
        .addData("operation", "preparation_test")

    event.recipes.gtceu.world_eater_tamer()
        .itemInputs(
            'gtceu:redsediment_ingot'
        )
        .itemOutputs(
            'gtceu:odyle_ingot'
        )
        .duration(100)
        .addData("required_state", "PREPARED")
        .addData("operation", "casing_conversion")

    event.recipes.gtceu.world_eater_tamer()
        .itemInputs(
            'gtceu:uiv_sensor'
        )
        .duration(2400)
        .addData("required_state", "DORMANT")
        .addData("operation", "information_collection")

})