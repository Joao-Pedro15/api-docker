import { Client, ConfigOptions } from 'elasticsearch'

const options: ConfigOptions = {
 host: 'elasticsearch:9200',
}

export class ElasticSearch {

 public instance: Client
 constructor() {
  this.instance = this.getInstance()
 }

 private getInstance() {
  if (!this.instance) return new Client({ ...options })
  return this.instance
 }
}