ServerEvents.recipes((event) => {

    event.recipes.gtceu.advanced_fusion("geteuropiumfaster")
        .inputFluids(
            'gtceu:hydrogen 3750',
            'gtceu:neodymium 1600'
        )
        .outputFluids(
            'gtceu:europium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 900)

    event.recipes.gtceu.advanced_fusion("geturaniumfaster")
        .inputFluids(
            'gtceu:gold 1600',
            'gtceu:aluminium 1600'
        )
        .outputFluids(
            'gtceu:uranium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 1400)
    
    event.recipes.gtceu.advanced_fusion("getironplasmafaster")
        .inputFluids(
            'gtceu:silicon 1600',
            'gtceu:magnesium 1600'
        )
        .outputFluids(
            'gtceu:iron_plasma 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 1400)

    event.recipes.gtceu.advanced_fusion("getdarmstadiumfaster")
        .inputFluids(
            'gtceu:arsenic 3200',
            'gtceu:ruthenium 1600'
        )
        .outputFluids(
            'gtceu:darmstadtium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 1900)

    event.recipes.gtceu.advanced_fusion("getplutoniumfaster")
        .inputFluids(
            'gtceu:xenon 12500',
            'gtceu:zinc 1600'
        )
        .outputFluids(
            'gtceu:plutonium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 4400)

    event.recipes.gtceu.advanced_fusion("getduraniumfaster")
        .inputFluids(
            'gtceu:gallium 12500',
            'gtceu:radon 1600'
        )
        .outputFluids(
            'gtceu:duranium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3400)

    event.recipes.gtceu.advanced_fusion("getheliumplasmafaster")
        .inputFluids(
            'gtceu:deuterium 12500',
            'gtceu:tritium 12500'
        )
        .outputFluids(
            'gtceu:helium_plasma 12500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 900)

    event.recipes.gtceu.advanced_fusion("getnitrogenplasmafaster")
        .inputFluids(
            'gtceu:deuterium 37500',
            'gtceu:beryllium 1600'
        )
        .outputFluids(
            'gtceu:nitrogen_plasma 12500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 1800)

    event.recipes.gtceu.advanced_fusion("getoxygenplasmafaster")
        .inputFluids(
            'gtceu:carbon 1600',
            'gtceu:helium_3 12500'
        )
        .outputFluids(
            'gtceu:oxygen_plasma 12500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 800)

    event.recipes.gtceu.advanced_fusion("geturanium235faster")
        .inputFluids(
            'gtceu:mercury 12500',
            'gtceu:magnesium 1600'
        )
        .outputFluids(
            'gtceu:uranium_235 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3400)

    event.recipes.gtceu.advanced_fusion("gettritaniumfaster")
        .inputFluids(
            'gtceu:titanium 4800',
            'gtceu:duranium 3200'
        )
        .outputFluids(
            'gtceu:tritanium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 4900)

    event.recipes.gtceu.advanced_fusion("getplutonium241faster")
        .inputFluids(
            'gtceu:krypton 12500',
            'gtceu:cerium 1600'
        )
        .outputFluids(
            'gtceu:plutonium_241 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 6900)

    event.recipes.gtceu.advanced_fusion("getchromiumfaster")
        .inputFluids(
            'gtceu:hydrogen 12500',
            'gtceu:vanadium 1600'
        )
        .outputFluids(
            'gtceu:chromium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 2900)

    event.recipes.gtceu.advanced_fusion("getlutetiumfaster")
        .inputFluids(
            'gtceu:lanthanum 1600',
            'gtceu:silicon 1600'
        )
        .outputFluids(
            'gtceu:lutetium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3900)

    event.recipes.gtceu.advanced_fusion("getradonfaster")
        .inputFluids(
            'gtceu:gold 1600',
            'gtceu:mercury 1600'
        )
        .outputFluids(
            'gtceu:radon 12500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 900)

    event.recipes.gtceu.advanced_fusion("gettinplasmafaster")
        .inputFluids(
            'gtceu:silver 14400',
            'gtceu:helium_3 37500'
        )
        .outputFluids(
            'gtceu:tin_plasma 14400'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3400)

    event.recipes.gtceu.advanced_fusion("getosmiumfaster")
        .inputFluids(
            'gtceu:silver 1600',
            'gtceu:copper 1600'
        )
        .outputFluids(
            'gtceu:osmium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 6300)

    event.recipes.gtceu.advanced_fusion("getnickelplasmafaster")
        .inputFluids(
            'gtceu:fluorine 12500',
            'gtceu:potassium 1600'
        )
        .outputFluids(
            'gtceu:nickel_plasma 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 4300)

    event.recipes.gtceu.advanced_fusion("getargonplasmafaster")
        .inputFluids(
            'gtceu:carbon 1600',
            'gtceu:magnesium 1600'
        )
        .outputFluids(
            'gtceu:argon_plasma 12500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 900)

    event.recipes.gtceu.advanced_fusion("getindiumfaster")
        .inputFluids(
            'gtceu:silver 14400',
            'gtceu:lithium 14400'
        )
        .outputFluids(
            'gtceu:indium 14400'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 5900)

    event.recipes.gtceu.advanced_fusion("getamericiumplasmafaster")
        .inputFluids(
            'gtceu:plutonium_241 14400',
            'gtceu:hydrogen 200000'
        )
        .outputFluids(
            'gtceu:americium_plasma 14400'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 3400)

    event.recipes.gtceu.advanced_fusion("getneutroniumfaster")
        .inputFluids(
            'gtceu:americium 12800',
            'gtceu:naquadria 12800'
        )
        .outputFluids(
            'gtceu:neutronium 3200'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 6400)

    event.recipes.gtceu.advanced_fusion("getnaquadriafaster")
        .inputFluids(
            'gtceu:enriched_naquadah 1600',
            'gtceu:radon 12500'
        )
        .outputFluids(
            'gtceu:naquadria 400'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 5400)

    event.recipes.gtceu.advanced_fusion("getamericiumfaster")
        .inputFluids(
            'gtceu:lutetium 1600',
            'gtceu:chromium 1600'
        )
        .outputFluids(
            'gtceu:americium 1600'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(400)
        .addData('heat_level', 5900)

});