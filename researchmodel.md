---
layout: post
tagline:
---

# Bayesian Model of Research and the PhD

Grad school and research is a complicated process.  There are some phrases that get tossed around, such as "good work", "great work", "least publishable unit", "she's smart", etc.  Also, it can be difficult to parse through "vigorous scientific debate".  In general, it can be easy to get confused, lose sight of progress, start thinking questions such as "what's the point?", and be unhappy.    Besides, what does "do good work" even mean?

This document proposes _a_ model to reason about the role of papers (as a unit of accomplishment) in the bigger context.

### Caveats

1. I am primarily acquainted with computer science, and specifically data management and visualization
2. I am not a probabilistic modeling expert.  I know enough to understand that

        P(happy) = P(happy | cat) + P(happy | !cat)

and that

        1 = P(happy) + P(not happy)


3. Models are fancy opinions.  It is open to debate whether the assumptions and interpretation of the proposed model makes sense.
4. These are my opinions alone


## Background 

This section sets up the context of the model.  For the good stuff, [jump to The Model](#themodel)

### What's the goal?

Let's start by agreeing that the broad goal is to maximize the probability of some goodness measure in the world.  

        P(good)

This could be really anything and is a personal decision.  It could be:


        P(love)   
        P(not world hunger)   
        P(health)   
        P(wealth)

This is too general, so let's decompose it into elements under your control and in the context of research.  First, the focus is on `you`:

        P(good | you)

Presumably, you are in a research program because you believe “doing research” is the best way to maximize this probability:

        P(good | you) = P(good | research) P(research | you) 
                        + 
                        P(good | nonresearch) P(nonresearch | you)

With the strong assumption that:

        P(good | research) >> P(good | nonresearch)

For some people, it turns out this assumption is not true, and it is better to leave research and do “real work”.
Typically it is more due to `P(good | nonresearch) >> P(good | research)` than `P(research | you)→0` as some would imply.

Arguably, there are many many avenues where this is the case---joining a non-profit, finding an arbitrage opportunity, social entrepreneurship, teaching, etc.  That's totally cool.

For the purposes here, you have chosen research, so let's assume `P(nonresearch | you) → 0`:

        P(good | research) P(research | you)

Let's assume take “the paper” as a proxy for a unit of research.  That's clearly a vast vast oversimplification, but let's go with that for now — you are a paper generator.  You could generate *sound* papers, or *unsound and incorrect* papers.

        P(good | paper) P(paper | you) = P(good | sound) P(sound | you) + P(good | unsound) P(unsound | you)

We generally assume that sound technical work is better.  In otherwords, that 

       P(good | unsound) → 0.  

This is pretty reasonable, however one might say that `P(fame | unsound)` is a different story, because `P(unsound | you)` is arguably easier.  We also hope that in the long term, aspects such as shame get in the way of fame.  To simplify our life, let's strive for sound work:

       paper = sound paper

We are now setup to get to business and analyze the positive impact of publishing sound research.  


## <a name="themodel"></a> The Model

Let positive impact be defined as the level of goodness if you did the research (the paper) or did nothing:

       P(Positive Impact) = P(good | paper) P(paper) - P(good | no paper)

A paper's claims and implied value hinges on 1) evidence to support the claims and 2) assumptions:

                          = P(good | paper) P(paper | evidence, assumptions) P(evidence | you) P(assumptions)

Positive Impact is split into the following 2 categories.

#### Correctness: is the paper believable?

`P(evidence | you)` is called “conducting research correctly” and should be close to 1.  

`P(paper | evidence, assumptions)` defines whether the evidence is good enough to prove the claim.  This is called experimental design and it should be 1.

The PhD certifies that these probabilities are reasonably close to 1.  

#### Impact: does the paper matter?

`P(good | paper)` defines the belief about whether or not the work is worthy of pursuing in order to improve the world.  This is driven by taste (e.g., what “good” means to you).  People can agree to disagree, but ideally “good” is positive.

`P(assumptions)` defines the scope of the work's applicability.  Understanding the market, trends, talking to practitioners increases the probability of picking a problem where the assumptions hold.

## Takeaways

Does this model actually help us reason about research and grad school?  

Least publishable units (LPUs) are papers where 

* `P(assumptions) → 0` or 
* `P(good | paper) → 0`

The PhD certifies

* `P(evidence | you) > 0` and to maximize `P(paper | evidence) → 1`
* Critiques that take apart these components are helpful for growth

Ideas

* Identifying an idea where `P(good | paper) → 1` is very very hard
* This *must be nurtured and encouraged.*  
* Accept that “good” can have many definitions.  Some arguments for the liberal arts degree is to pick meaningful definitions of “good”. 

Vision 

* Having vision means: `P(assumption | future) >> P(assumption | now)`
* Following the crowd means that `P(assumption) = 1`.  If this is the case, one hopes that P(evidence | you) >> P(evidence | other researchers)

**Good PhD programs and Advisors nurture ideas and vision.**


What are your thoughts?  Is there a better model?


