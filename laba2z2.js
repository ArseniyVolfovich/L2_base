function ipv4Parser(ip, mask){
const Ip = ip.split('.').map(Number)
  const Mask=mask.split('.').map(Number)
  const network=[]
  const host=[]
  for(let i=0;i<4;i++){
    const net=Ip[i]&Mask[i]
    const h =Ip[i]& (~Mask[i]&0xFF)
    network.push(net)
    host.push(h)
  }
  return [network.join('.'),host.join('.')]
}