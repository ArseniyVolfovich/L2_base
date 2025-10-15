function domainName(url){
url = url.replace("http://", "")
url = url.replace("https://", "")
url = url.replace("www.", "")
let part =url.split(".")
let domain = part[0]
return domain
}