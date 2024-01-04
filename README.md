# Reproduction

context: 
so i just added the module added a route in `/content/blog/test.md`

and now in dev mode, everything i get is the test.md that's all the module recognize, though the file has been deleted and i added something else.

however this is not the case when i use `pnpm build & preview`. i get the correct results.
i even deleted `.nuxt` folder and `.output`, surprisingly it still only recognize the  `blog/test.md`  file. in dev mode, `pnpm dev`. 


the cause:
Okay, Turns out to be a browser cache.