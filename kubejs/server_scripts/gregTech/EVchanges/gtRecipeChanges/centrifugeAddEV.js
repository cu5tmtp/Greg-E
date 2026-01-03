ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('watercentrifugin')
        .inputFluids(
            'minecraft:water 1000'
        )
        .itemOutputs(
            'gtceu:tiny_salt_dust',
            'gtceu:tiny_calcium_dust',
            'gtceu:tiny_iron_dust'
        )
        .outputFluids(
            'gregecore:deionized_water 750'
        )
        
        .duration(200)
        .EUt(1680)
        .circuit(10)
})