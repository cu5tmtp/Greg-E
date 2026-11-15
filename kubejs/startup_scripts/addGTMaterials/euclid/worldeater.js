GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('odyle')
        .ingot()
        .color(0xeb14ea)
        .formula('Od')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    event.create('delerianmetalalloy')
        .ingot()
        .color(0x6a3fc0)
        .formula('(3R,7S,11E)-2,4,9,13-tetra-[Ax₂Bq₃(CvDm₂Ez)FpGv₄]-HqIw(Jn₃KdLr)MzNvOq₂Pj[QmRv₂SwTz(UjVn₃Wp)]XrYkZmAq(Bv₂CjDw)EpFzGm₂HxIq[JvKw(Lz₃MpNj)OvPw₂Qr]RkSjTwUp(VzWm₂Xq)YvZjAbCw(DvEw)FjGwHjIv₃')
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

});