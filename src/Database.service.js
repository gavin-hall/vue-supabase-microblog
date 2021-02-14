import { createClient } from '@supabase/supabase-js';

export default class DatabaseService {
  constructor() {
    // this.database = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)
    this.database = createClient('https://qtwsoisqwshotouwuagi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzMyNzA0NSwiZXhwIjoxOTI4OTAzMDQ1fQ.fPZQ_ZZ73sIBiTEUKvZXOnCOfuXtRK8GuzQs0QATr7o')
  }

  getInstance() {
    return this.database;
  }
}
