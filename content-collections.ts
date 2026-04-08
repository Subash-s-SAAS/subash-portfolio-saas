import {defineCollection, defineConfig} from "@content-collections/core"
import {compileMDX} from '@content-collections/mdx'
import {z} from 'zod'
import {remarkPlugins} from '@prose-ui/core'

const blogs=defineCollection({
    name:"blogs",
    directory:"content/blogs",
    include:"**/*.mdx",
    schema:z.object({title:z.string(),chip:z.string(),date:z.string(),duration:z.string(),content:z.string()}),
    transform:async(document,context)=>{
        const mdx=await compileMDX(context,document,{remarkPlugins:remarkPlugins()})
        return{
            ...document,mdx
        }
    }
})
export default defineConfig({collections:[blogs]})