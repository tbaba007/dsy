
interface translationsProps{
    language:'En'|'De',
    translation:{
        key:string;
        value:string
    }[]
}
export const translations:translationsProps[]=[
    {
       language:'De',
       translation:[
        {
            key:'Hello',
            value:'Hallo'
        },
        {
            key:'Good morning',
            value:'Guten Morgen'
        }
       ]
    }
]