ServerEvents.recipes((event) => {

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'minecraft:iron_ingot',
            'minecraft:copper_ingot',
            'minecraft:gold_ingot',
            'minecraft:netherite_ingot',
            'botania:manasteel_ingot',
            'botania:terrasteel_ingot',
            'botania:elementium_ingot',
            'botania:gaia_ingot',
            'megacells:sky_steel_ingot',
            'mythicbotany:alfsteel_ingot',
            'ad_astra:desh_ingot',
            'ad_astra:ostrum_ingot',
            'ad_astra:calorite_ingot',
            'ad_extendra:juperium_ingot',
            'ad_extendra:saturlyte_ingot',
            'ad_extendra:uranium_ingot',
            'ad_extendra:neptunium_ingot',
            'ad_extendra:radium_ingot',
            'ad_extendra:plutonium_ingot',
            'ad_extendra:electrolyte_ingot',
            'twilightforest:knightmetal_ingot'
        )
        .itemOutputs(
            'kubejs:euclid/elementiumone'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'twilightforest:ironwood_ingot',
            'twilightforest:fiery_ingot',
            'undergarden:cloggrum_ingot',
            'undergarden:froststeel_ingot',
            'undergarden:forgotten_ingot',
            'kubejs:twilightingots',
            'kubejs:lvalloy',
            'kubejs:mvalloy',
            'kubejs:hvalloy',
            'kubejs:evalloy',
            'kubejs:ivalloy',
            'kubejs:luvalloy',
            'kubejs:animated/zpmalloy',
            'kubejs:animated/uvalloy',
            'kubejs:animated/uhvalloy',
            'bloodmagic:ingot_hellforged',
            'draconicevolution:awakened_draconium_ingot',
            'draconicevolution:draconium_ingot',
            'botanicalextramachinery:malachite_ingot',
            'botanicalextramachinery:saffron_ingot',
            'botanicalextramachinery:shadow_ingot',
            'botanicalextramachinery:crimson_ingot'
        )
        .itemOutputs(
            'kubejs:euclid/elementiumtwo'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'botanicalextramachinery:crimson_ingot',
            'gtceu:steel_ingot',
            'gtceu:aluminium_ingot',
            'gtceu:stainless_steel_ingot',
            'gtceu:titanium_ingot',
            'gtceu:tungsten_steel_ingot',
            'gtceu:rhodium_plated_palladium_ingot',
            'gtceu:naquadah_alloy_ingot',
            'gtceu:darmstadtium_ingot',
            'gtceu:tritanium_ingot',
            'gtceu:purified_fractalium_ingot',
            'gtceu:prometheum_ingot',
            'gtceu:rtm_alloy_ingot',
            'gtceu:vanadium_steel_ingot',
            'gtceu:osmiridium_ingot',
            'gtceu:kapton_ingot',
            'gtceu:maliwanium_ingot',
            'gtceu:aethelosil_ingot',
            'enderio:copper_alloy_ingot',
            'enderio:energetic_alloy_ingot',
            'enderio:vibrant_alloy_ingot',
        )
        .itemOutputs(
            'kubejs:euclid/elementiumthree'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'kubejs:euclid/elementiumone',
            'kubejs:euclid/elementiumtwo',
            'kubejs:euclid/elementiumthree'
        )
        .itemOutputs(
            'kubejs:euclid/elementium',
        )
        .duration(30000000)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'kubejs:euclid/elementium',
            'kubejs:voidseed',
            '16x gtceu:uiv_field_generator',
            '16x kubejs:euclid/euclid_mainframe'
        )
        .itemOutputs(
            'kubejs:euclid/nullingot'
        )
        .duration(30000000)

    event.recipes.gtceu.robotic_fabrication('euclid_circuit2')
        .itemInputs(
            'kubejs:latgriumboard',
            '8x gtceu:reinforced_delirium_single_wire',
            'kubejs:animated/draconicprocessor',
            '2x kubejs:ultimatecapacitor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_circuit'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication('euclid_integrated2')
        .itemInputs(
            'kubejs:redsedimentcircuitboard',
            '8x gtceu:redrockium_single_wire',
            'kubejs:animated/draconicprocessor',
            'kubejs:ultimateinductor',
            'kubejs:ultimatetransistor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_integrated'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication('cvhdwjscvsdjvj2')
        .itemInputs(
            '2x kubejs:euclid/euclid_circuit',
            '2x kubejs:euclid/euclid_integrated',
            'gtceu:uiv_electric_motor',
            '2x kubejs:ultimatediode',
            '4x kubejs:ultimateresistor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_computer'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            '2x kubejs:carcosacpuchip',
            '2x kubejs:carcosaramchip',
            '2x kubejs:euclid/euclid_computer',
            '4x gtceu:stabilizedarboretum_single_wire'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_mainframe'
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'kubejs:euclid/euclid_circuit',
            'kubejs:euclid/euclid_integrated',
            'gtceu:uiv_electric_motor',
            'kubejs:bioresistor'
        )
        .itemOutputs(
            Item.of('kubejs:euclid/euclid_computer')
        )
        .duration(100)

    event.recipes.gtceu.robotic_fabrication()
        .itemInputs(
            'kubejs:carcosacpuchip',
            'kubejs:carcosaramchip',
            'kubejs:euclid/euclid_computer',
            '2x gtceu:stabilizedarboretum_single_wire',
            '2x kubejs:biocapacitor'
        )
        .itemOutputs(
            'kubejs:euclid/euclid_mainframe'
        )
        .duration(100)

})