import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://amztkyowgjxcqfvictjw.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_lxPqdt7vRLaYoH0aWC0inQ_taLupsmT'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
//Thisisapasswordtotheprojectofcursorobotstomiworkinalgorithmics